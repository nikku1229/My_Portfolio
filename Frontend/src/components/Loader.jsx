import React, { useLayoutEffect, useRef } from "react";
import { loaderAnimation } from "../animations/loadingAnimation";
import gsap from "gsap";

function Loader() {
  const loaderRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      loaderAnimation(loaderRef.current);
    }, loaderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="loader-box-container" ref={loaderRef}>
      <div className="loader-flower">
        <div className="loader-petal t-l"></div>
        <div className="loader-petal t-r"></div>
        <div className="loader-petal b-l"></div>
        <div className="loader-petal b-r"></div>
      </div>
    </div>
  );
}

export default Loader;
