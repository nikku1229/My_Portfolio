import { useLayoutEffect, useRef } from "react";
import { heroAnimation } from "../animations/homeAnimation";
import gsap from "gsap";
import "../nameBlock.css";

function NameBlock() {
  const heroContainer = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      heroAnimation(heroContainer.current);
    }, heroContainer);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="name-container" ref={heroContainer}>
        <div className="hero-divs div1"></div>
        <div className="hero-divs div2"></div>
        <div className="hero-divs div3"></div>
        <div className="hero-divs div4"></div>
        <div className="hero-divs div5"></div>
        <div className="hero-divs div6"></div>
        <div className="hero-divs div7"></div>
        <div className="hero-divs div8"></div>
        <div className="hero-divs div9"></div>
        <div className="hero-divs div10"></div>
        <div className="hero-divs div11"></div>
        <div className="hero-divs div12"></div>
        <div className="hero-divs div13"></div>
        <div className="hero-divs div14"></div>
        <div className="hero-divs div15"></div>
        <div className="hero-divs div16"></div>
        <div className="hero-divs div17"></div>
        <div className="hero-divs div18"></div>
        <div className="hero-divs div19"></div>
        <div className="hero-divs div20"></div>
        <div className="hero-divs div21"></div>
        <div className="hero-divs div22"></div>
        <div className="hero-divs div23"></div>
        <div className="hero-divs div24"></div>
        <div className="hero-divs div25"></div>
        <div className="hero-divs div26"></div>
        <div className="hero-divs div27"></div>
        <div className="hero-divs div28"></div>
        <div className="hero-divs div29"></div>
        <div className="hero-divs div30"></div>
        <div className="hero-divs div31"></div>
        <div className="hero-divs div32"></div>
        <div className="hero-divs div33"></div>
        <div className="hero-divs div34"></div>
        <div className="hero-divs div35"></div>
        <div className="hero-divs div36"></div>
        <div className="hero-divs div37"></div>
        <div className="hero-divs div38"></div>
        <div className="hero-divs div39"></div>
        <div className="hero-divs div40"></div>
        <div className="hero-divs div41"></div>
        <div className="hero-divs div42"></div>
        <div className="hero-divs div43"></div>
        <div className="hero-divs div44"></div>
        <div className="hero-divs div45"></div>
        <div className="hero-divs div46"></div>
        <div className="hero-divs div47"></div>
        <div className="hero-divs div48"></div>
        <div className="hero-divs div49"></div>
        <div className="hero-divs div50"></div>
        <div className="hero-divs div51"></div>
        <div className="hero-divs div52"></div>
        <div className="hero-divs div53"></div>
        <div className="hero-divs div54"></div>
        <div className="hero-divs div55"></div>
        <div className="hero-divs div56"></div>
        <div className="hero-divs div57"></div>
        <div className="hero-divs div58"></div>
        <div className="hero-divs div59"></div>
        <div className="hero-divs div60"></div>
        <div className="hero-divs div61"></div>
        <div className="hero-divs div62"></div>
        <div className="hero-divs div63"></div>
        <div className="hero-divs div64"></div>
        <div className="div65">
          <h2>Full Stack developer</h2>
        </div>
      </div>
    </>
  );
}

export default NameBlock;
