import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { splashscreenAnimation } from "../animations/splashscreenAnimation";
import Loader from "./Loader";

function SplashScreen() {
  const splashscreenRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      splashscreenAnimation(splashscreenRef.current);
    }, splashscreenRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="splash-screen" ref={splashscreenRef}>
      <div className="vertical-lines left">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="v-line v-left"></span>
        ))}
      </div>

      <div className="vertical-lines right">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="v-line v-right"></span>
        ))}
      </div>

      <div className="horizontal-lines top">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="h-line h-top"></span>
        ))}
      </div>

      <div className="horizontal-lines bottom">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="h-line h-bottom"></span>
        ))}
      </div>

      <div className="loader-content">
        <h2>Welcome to portfolio!</h2>
        <Loader />
      </div>
    </div>
  );
}

export default SplashScreen;
