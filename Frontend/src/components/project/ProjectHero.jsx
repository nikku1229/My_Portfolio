import { useEffect, useRef } from "react";

function ProjectHero() {
  const mountRef = useRef(null);

  useEffect(() => {
    let renderer, controls, renderPipeline, timer, light;
    let updateParticles, spawnParticles;
    let cleanup;

    async function init() {
      const THREE = await import("three/webgpu");
      new THREE.WebGPURenderer();

      const {
        atan,
        cos,
        float,
        max,
        min,
        mix,
        PI,
        TWO_PI,
        sin,
        vec2,
        vec3,
        color,
        Fn,
        hash,
        hue,
        If,
        instanceIndex,
        Loop,
        mx_fractal_noise_float,
        mx_fractal_noise_vec3,
        pass,
        pcurve,
        storage,
        deltaTime,
        time,
        uv,
        uniform,
        step,
      } = await import("three/tsl");
      const { bloom } = await import("three/addons/tsl/display/BloomNode.js");
      const { OrbitControls } =
        await import("three/addons/controls/OrbitControls.js");
      const WebGPU = (await import("three/addons/capabilities/WebGPU.js"))
        .default;

      if (!WebGPU.isAvailable()) {
        console.error("WebGPU supported nahi hai");
        return;
      }

      const container = mountRef.current;
      if (!container) return;

      // ── Pointers ──
      const screenPointer = new THREE.Vector2();
      const scenePointer = new THREE.Vector3();
      const raycastPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const raycaster = new THREE.Raycaster();

      // ── Uniforms ──
      const nbParticles = Math.pow(2, 13);
      const timeScale = uniform(1.0);
      const particleLifetime = uniform(2);
      const particleSize = uniform(1.0);
      const linksWidth = uniform(0.005);
      const colorOffset = uniform(0.0);
      const colorVariance = uniform(2.0);
      const colorRotationSpeed = uniform(1.0);
      const spawnIndex = uniform(0);
      const nbToSpawn = uniform(5);
      const spawnPosition = uniform(vec3(0.0));
      const previousSpawnPosition = uniform(vec3(0.0));
      const turbFrequency = uniform(0.5);
      const turbAmplitude = uniform(0.5);
      const turbOctaves = uniform(2);
      const turbLacunarity = uniform(2.0);
      const turbGain = uniform(0.5);
      const turbFriction = uniform(0.01);

      // ── Camera & Scene ──
      const camera = new THREE.PerspectiveCamera(
        60,
        container.clientWidth / container.clientHeight,
        0.1,
        200,
      );
      camera.position.set(0, 0, 10);
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x171717);

      timer = new THREE.Timer();

      // ── Renderer ──
      renderer = new THREE.WebGPURenderer({ antialias: true, alpha: false });
      renderer.setClearColor(0x171717);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      container.appendChild(renderer.domElement);
      await renderer.init();

      // ── TSL: color helper ──
      const getInstanceColor = Fn(([i]) => {
        return hue(
          color(0x0000ff),
          colorOffset.add(
            mx_fractal_noise_float(
              i.toFloat().mul(0.1),
              2,
              2.0,
              0.5,
              colorVariance,
            ),
          ),
        );
      });

      // ── Storage buffers ──
      const particlePositions = storage(
        new THREE.StorageInstancedBufferAttribute(nbParticles, 4),
        "vec4",
        nbParticles,
      );
      const particleVelocities = storage(
        new THREE.StorageInstancedBufferAttribute(nbParticles, 4),
        "vec4",
        nbParticles,
      );

      // Init (dead) particles
      renderer.compute(
        Fn(() => {
          particlePositions.element(instanceIndex).xyz.assign(vec3(10000.0));
          particlePositions.element(instanceIndex).w.assign(vec3(-1.0));
        })().compute(nbParticles),
      );

      // ── Particle mesh ──
      const particleQuadSize = 0.05;
      const particleGeom = new THREE.PlaneGeometry(
        particleQuadSize,
        particleQuadSize,
      );
      const particleMaterial = new THREE.SpriteNodeMaterial();
      particleMaterial.blending = THREE.AdditiveBlending;
      particleMaterial.depthWrite = false;
      particleMaterial.positionNode = particlePositions.toAttribute();
      particleMaterial.scaleNode = vec2(particleSize);
      particleMaterial.rotationNode = atan(
        particleVelocities.toAttribute().y,
        particleVelocities.toAttribute().x,
      );
      particleMaterial.colorNode = Fn(() => {
        const life = particlePositions.toAttribute().w;
        const modLife = pcurve(life.oneMinus(), 8.0, 1.0);
        const pulse = pcurve(
          sin(hash(instanceIndex).mul(TWO_PI).add(time.mul(0.5).mul(TWO_PI)))
            .mul(0.5)
            .add(0.5),
          0.25,
          0.25,
        )
          .mul(10.0)
          .add(1.0);
        return getInstanceColor(instanceIndex).mul(pulse.mul(modLife));
      })();
      particleMaterial.opacityNode = Fn(() => {
        const circle = step(uv().xy.sub(0.5).length(), 0.5);
        const life = particlePositions.toAttribute().w;
        return circle.mul(life);
      })();

      const particleMesh = new THREE.InstancedMesh(
        particleGeom,
        particleMaterial,
        nbParticles,
      );
      particleMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      particleMesh.frustumCulled = false;
      scene.add(particleMesh);

      // ── Links geometry ──
      const linksIndices = [];
      for (let i = 0; i < nbParticles; i++) {
        const base = i * 8;
        for (let j = 0; j < 2; j++) {
          const o = base + j * 4;
          linksIndices.push(o, o + 1, o + 2, o, o + 2, o + 3);
        }
      }
      const nbVertices = nbParticles * 8;
      const linksVerticesSBA = new THREE.StorageBufferAttribute(nbVertices, 4);
      const linksColorsSBA = new THREE.StorageBufferAttribute(nbVertices, 4);

      const linksGeom = new THREE.BufferGeometry();
      linksGeom.setAttribute("position", linksVerticesSBA);
      linksGeom.setAttribute("color", linksColorsSBA);
      linksGeom.setIndex(linksIndices);

      const linksMaterial = new THREE.MeshBasicNodeMaterial();
      linksMaterial.vertexColors = true;
      linksMaterial.side = THREE.DoubleSide;
      linksMaterial.transparent = true;
      linksMaterial.depthWrite = false;
      linksMaterial.depthTest = false;
      linksMaterial.blending = THREE.AdditiveBlending;
      linksMaterial.opacityNode = storage(
        linksColorsSBA,
        "vec4",
        linksColorsSBA.count,
      ).toAttribute().w;

      const linksMesh = new THREE.Mesh(linksGeom, linksMaterial);
      linksMesh.frustumCulled = false;
      scene.add(linksMesh);

      // ── Compute: update particles ──
      updateParticles = Fn(() => {
        const position = particlePositions.element(instanceIndex).xyz;
        const life = particlePositions.element(instanceIndex).w;
        const velocity = particleVelocities.element(instanceIndex).xyz;
        const dt = deltaTime.mul(0.1).mul(timeScale);

        If(life.greaterThan(0.0), () => {
          const localVel = mx_fractal_noise_vec3(
            position.mul(turbFrequency),
            turbOctaves,
            turbLacunarity,
            turbGain,
            turbAmplitude,
          ).mul(life.add(0.01));
          velocity.addAssign(localVel);
          velocity.mulAssign(turbFriction.oneMinus());
          position.addAssign(velocity.mul(dt));
          life.subAssign(dt.mul(particleLifetime.reciprocal()));

          const closestDist1 = float(10000.0).toVar();
          const closestPos1 = vec3(0.0).toVar();
          const closestLife1 = float(0.0).toVar();
          const closestDist2 = float(10000.0).toVar();
          const closestPos2 = vec3(0.0).toVar();
          const closestLife2 = float(0.0).toVar();

          Loop(nbParticles, ({ i }) => {
            const otherPart = particlePositions.element(i);
            If(
              i.notEqual(instanceIndex).and(otherPart.w.greaterThan(0.0)),
              () => {
                const otherPosition = otherPart.xyz;
                const dist = position.sub(otherPosition).lengthSq();
                const moreThanZero = dist.greaterThan(0.0);
                If(dist.lessThan(closestDist1).and(moreThanZero), () => {
                  closestDist1.assign(dist);
                  closestPos1.assign(otherPosition.xyz);
                  closestLife1.assign(otherPart.w);
                }).ElseIf(dist.lessThan(closestDist2).and(moreThanZero), () => {
                  closestDist2.assign(dist);
                  closestPos2.assign(otherPosition.xyz);
                  closestLife2.assign(otherPart.w);
                });
              },
            );
          });

          const linksPositions = storage(
            linksVerticesSBA,
            "vec4",
            linksVerticesSBA.count,
          );
          const linksColors = storage(
            linksColorsSBA,
            "vec4",
            linksColorsSBA.count,
          );
          const firstLinkIndex = instanceIndex.mul(8);
          const secondLinkIndex = firstLinkIndex.add(4);

          linksPositions.element(firstLinkIndex).xyz.assign(position);
          linksPositions.element(firstLinkIndex).y.addAssign(linksWidth);
          linksPositions.element(firstLinkIndex.add(1)).xyz.assign(position);
          linksPositions
            .element(firstLinkIndex.add(1))
            .y.addAssign(linksWidth.negate());
          linksPositions.element(firstLinkIndex.add(2)).xyz.assign(closestPos1);
          linksPositions
            .element(firstLinkIndex.add(2))
            .y.addAssign(linksWidth.negate());
          linksPositions.element(firstLinkIndex.add(3)).xyz.assign(closestPos1);
          linksPositions.element(firstLinkIndex.add(3)).y.addAssign(linksWidth);

          linksPositions.element(secondLinkIndex).xyz.assign(position);
          linksPositions.element(secondLinkIndex).y.addAssign(linksWidth);
          linksPositions.element(secondLinkIndex.add(1)).xyz.assign(position);
          linksPositions
            .element(secondLinkIndex.add(1))
            .y.addAssign(linksWidth.negate());
          linksPositions
            .element(secondLinkIndex.add(2))
            .xyz.assign(closestPos2);
          linksPositions
            .element(secondLinkIndex.add(2))
            .y.addAssign(linksWidth.negate());
          linksPositions
            .element(secondLinkIndex.add(3))
            .xyz.assign(closestPos2);
          linksPositions
            .element(secondLinkIndex.add(3))
            .y.addAssign(linksWidth);

          const linkColor = getInstanceColor(instanceIndex);
          const l1 = max(0.0, min(closestLife1, life)).pow(0.8);
          const l2 = max(0.0, min(closestLife2, life)).pow(0.8);

          Loop(4, ({ i }) => {
            linksColors.element(firstLinkIndex.add(i)).xyz.assign(linkColor);
            linksColors.element(firstLinkIndex.add(i)).w.assign(l1);
            linksColors.element(secondLinkIndex.add(i)).xyz.assign(linkColor);
            linksColors.element(secondLinkIndex.add(i)).w.assign(l2);
          });
        });
      })()
        .compute(nbParticles)
        .setName("Update Particles");

      // ── Compute: spawn particles ──
      spawnParticles = Fn(() => {
        const particleIndex = spawnIndex
          .add(instanceIndex)
          .mod(nbParticles)
          .toInt();
        const position = particlePositions.element(particleIndex).xyz;
        const life = particlePositions.element(particleIndex).w;
        const velocity = particleVelocities.element(particleIndex).xyz;

        life.assign(1.0);

        const rRange = float(0.01);
        const rTheta = hash(particleIndex).mul(TWO_PI);
        const rPhi = hash(particleIndex.add(1)).mul(PI);
        const rx = sin(rTheta).mul(cos(rPhi));
        const ry = sin(rTheta).mul(sin(rPhi));
        const rz = cos(rTheta);
        const rDir = vec3(rx, ry, rz);

        const pos = mix(
          previousSpawnPosition,
          spawnPosition,
          instanceIndex.toFloat().div(nbToSpawn.sub(1).toFloat()).clamp(),
        );
        position.assign(pos.add(rDir.mul(rRange)));
        velocity.assign(rDir.mul(5.0));
      })()
        .compute(nbToSpawn.value)
        .setName("Spawn Particles");

      // ── Background ──
      const backgroundGeom = new THREE.IcosahedronGeometry(100, 5).applyMatrix4(
        new THREE.Matrix4().makeScale(-1, 1, 1),
      );
      const backgroundMaterial = new THREE.MeshStandardNodeMaterial();
      backgroundMaterial.colorNode = color(0x171717);
      backgroundMaterial.side = THREE.BackSide;
      backgroundMaterial.roughness = 0.4;
      backgroundMaterial.metalness = 0.9;
      backgroundMaterial.flatShading = true;
      backgroundMaterial.colorNode = color(0x171717);
      scene.add(new THREE.Mesh(backgroundGeom, backgroundMaterial));

      // ── Light ──
      light = new THREE.PointLight(0xffffff, 3000);
      scene.add(light);

      // ── Post processing ──
      renderPipeline = new THREE.RenderPipeline(renderer);
      const scenePass = pass(scene, camera);
      const scenePassColor = scenePass.getTextureNode("output");
      const bloomPass = bloom(scenePassColor, 0.75, 0.1, 0.5);
      const bgColor = color(0x171717);
      renderPipeline.outputNode = bgColor.add(scenePassColor).add(bloomPass);

      // ── Controls ──
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 10.0;
      controls.maxDistance = 75;

      // ── Helpers ──
      function updatePointer() {
        raycaster.setFromCamera(screenPointer, camera);
        raycaster.ray.intersectPlane(raycastPlane, scenePointer);
      }

      // ── Events ──
      const onPointerMove = (e) => {
        const rect = container.getBoundingClientRect();
        screenPointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        screenPointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      };
      const onResize = () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };
      container.addEventListener("pointermove", onPointerMove);
      window.addEventListener("resize", onResize);

      // ── Animation loop ──
      renderer.setAnimationLoop(() => {
        if (!renderPipeline) return;

        timer.update();

        renderer.compute(updateParticles);
        renderer.compute(spawnParticles);

        spawnIndex.value = (spawnIndex.value + nbToSpawn.value) % nbParticles;

        raycastPlane.normal.set(0, 0, 1).applyEuler(camera.rotation);
        updatePointer();

        previousSpawnPosition.value.copy(spawnPosition.value);
        spawnPosition.value.lerp(scenePointer, 0.1);

        colorOffset.value +=
          timer.getDelta() * colorRotationSpeed.value * timeScale.value;

        const t = timer.getElapsed();
        light.position.set(
          Math.sin(t * 0.5) * 30,
          Math.cos(t * 0.3) * 30,
          Math.sin(t * 0.2) * 30,
        );

        controls.update();
        renderPipeline.render();
      });

      // ── Cleanup function ──
      return () => {
        window.removeEventListener("resize", onResize);
        container.removeEventListener("pointermove", onPointerMove);
        renderer.setAnimationLoop(null);
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    }

    init().then((fn) => {
      cleanup = fn;
    });

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return <div ref={mountRef} className="project-canvas" />;
}

export default ProjectHero;
