import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { scrollerAnimation } from "../animations/scrollerAnimation";

function ScrollerSlider() {
  const scrollerRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      scrollerAnimation(scrollerRef.current);
    }, scrollerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="scroller-section wide-width">
        <div className="scroller-container" ref={scrollerRef}>
          <div className="scroller-div-start">
            <div className="tags-block tag-block1">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m7 16 4-4-4-4m6 8 4-4-4-4"
                />
              </svg>
            </div>
            <div className="tags-block tag-block2">
              <p>
                ❝Talk is cheap. <br /> Show me the code.
              </p>
            </div>
          </div>
          <h2>
            <span>F</span>
            <span>e</span>
            <span>e</span>
            <span>l</span>
          </h2>
          <h2 className="h2">Free</h2>
          <h2 className="h2">to</h2>
          <h2 className="h2">Reach</h2>
        </div>
      </div>
    </>
  );
}

export default ScrollerSlider;
