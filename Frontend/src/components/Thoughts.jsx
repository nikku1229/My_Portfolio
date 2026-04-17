import { useState, useEffect } from "react";
const thougts = [
  { text: "Slide 1" },
  { text: "Slide 2" },
  { text: "Slide 3" },
  { text: "Slide 4" },
  { text: "Slide 5" },
  { text: "Slide 6" },
];

function Thoughts() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % thougts.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + thougts.length) % thougts.length);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="thoughts-container" id="thoughts">
        <div className="thought-head">
          <h2>My Thoughts</h2>
        </div>

        <div className="carousel">
          <button className="left primary-btn" onClick={prevSlide}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </button>

          <div className="carousel-block">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${index * 340}px)` }}
            >
              {thougts.map((item, i) => (
                <div className={`card ${index === i ? "active" : ""}`} key={i}>
                  <h3>{item.text}</h3>
                  <p>~ Nitish Sharma</p>
                </div>
              ))}
            </div>
          </div>

          <button className="right primary-btn" onClick={nextSlide}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Thoughts;
