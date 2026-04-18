import { useState, useEffect } from "react";
import { getThoughts } from "../service/thoughtsApi";
import { useAnchor } from "../context/AnchorContext";

function Thoughts() {
  const { quoteRef } = useAnchor();
  const [index, setIndex] = useState(0);
  const [thoughts, setThoughts] = useState([]);

  const fetchThoughts = async () => {
    try {
      const data = await getThoughts();

      if (!Array.isArray(data)) throw new Error("Invalid data");

      setThoughts(data || []);
    } catch (err) {
      console.error("Error fetching thoughts:", err);
      setThoughts([]);
    }
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  const nextSlide = () => {
    if (!thoughts || thoughts.length === 0) return;
    setIndex((prev) => (prev + 1) % thoughts.length);
  };

  const prevSlide = () => {
    if (!thoughts || thoughts.length === 0) return;
    setIndex((prev) => (prev - 1 + thoughts.length) % thoughts.length);
  };

  useEffect(() => {
    if (!thoughts || thoughts.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % thoughts.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [thoughts]);

  return (
    <>
      <div className="thoughts-container" ref={quoteRef}>
        <div className="thought-head">
          <h2>Quotes</h2>
        </div>

        {thoughts && thoughts.length > 0 ? (
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
                {thoughts &&
                  thoughts.map((item, i) => (
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
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m4.988 19.012 5.41-5.41m2.366-6.424 4.058 4.058-2.03 5.41L5.3 20 4 18.701l3.355-9.494 5.41-2.029Zm4.626 4.625L12.197 6.61 14.807 4 20 9.194l-2.61 2.61Z"
                />
              </svg>

              <h3>No quote to display</h3>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Thoughts;
