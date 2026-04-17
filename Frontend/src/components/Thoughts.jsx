import { useState, useEffect } from "react";
import { getThoughts } from "../service/thoughtsApi";

function Thoughts() {
  const [index, setIndex] = useState(0);
  const [thougts, setThoughts] = useState([]);

  const fetchThoughts = async () => {
    try {
      const data = await getThoughts();
      setThoughts(data);
    } catch (err) {
      console.error("Error fetching thoughts:", err);
    }
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  const nextSlide = () => {
    if (thougts.length === 0) return;
    setIndex((prev) => (prev + 1) % thougts.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + thougts.length) % thougts.length);
  };

  useEffect(() => {
    if (thougts.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % thougts.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [thougts]);

  return (
    <>
      <div className="thoughts-container" id="thoughts">
        <div className="thought-head">
          <h2>Quotes</h2>
        </div>

        {thougts && thougts.length > 0 ? (
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
                {thougts &&
                  thougts.map((item, i) => (
                    <div
                      className={`card ${index === i ? "active" : ""}`}
                      key={i}
                    >
                      <h3>{item.content}</h3>
                      <p>~ {item.createdBy || "Nitish Sharma"}</p>
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
        ) : (
          <>
            <div className="empty-thought-block">
              <h3>No thoughts to display</h3>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Thoughts;
