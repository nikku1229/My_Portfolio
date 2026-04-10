// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Home = () => {
//   const container = useRef();

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.utils.toArray(".section").forEach((section) => {
//         gsap.from(section, {
//           scrollTrigger: {
//             trigger: section,
//             start: "top top",
//             end: "+=80%",
//             pin: true,
//             scrub: 3,
//           },
//         });
//       });
//     }, container);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={container}>
//       <section className="section">Hero Section</section>
//       <section className="section">About Me</section>
//       <section className="section">Projects</section>
//       <section className="section">Contact</section>
//     </div>
//   );
// };

// export default Home;

// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Home = () => {
//   const container = useRef();

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from("h1", {
//         y: 100,
//         opacity: 0,
//         duration: 2,
//         ease: "power3.out",
//       });
//     }, container);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={container} className="home">
//       <h1>Hi, I'm Nitesh</h1>
//       <p>Creative Developer Portfolio</p>
//     </div>
//   );
// };

// export default Home;

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import Lenis from "@studio-freight/lenis";

// const lenis = new Lenis({
//   duration: 1.2,
//   smooth: true,
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Home = () => {
//   const container = useRef();

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       ScrollTrigger.scrollerProxy(document.body, {
//         scrollTop(value) {
//           return arguments.length ? lenis.scrollTo(value) : window.scrollY;
//         },
//         getBoundingClientRect() {
//           return {
//             top: 0,
//             left: 0,
//             width: window.innerWidth,
//             height: window.innerHeight,
//           };
//         },
//       });

//       gsap.utils.toArray(".section").forEach((section) => {
//         gsap.from(section, {
//           opacity: 0,
//           y: 100,
//           scrollTrigger: {
//             trigger: section,
//             start: "top 80%",
//           },
//         });
//       });
//     }, container);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={container}>
//       <section className="section">Hero Section</section>
//       <section className="section">About Me</section>
//       <section className="section">Projects</section>
//       <section className="section">Contact</section>
//     </div>
//   );
// };

// export default Home;
