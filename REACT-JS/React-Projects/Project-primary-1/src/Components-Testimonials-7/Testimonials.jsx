// Testimonials.jsx
import React, { useState } from "react";
import "./Style.css";

const testimonials = [
  {
    quote: "This is the best product I've ever used!",
    author: "Jane Doe",
  },
  {
    quote: "I highly recommend this product to everyone!",
    author: "John Smith",
  },
  {
    quote: "This product has completely changed my life!",
    author: "Bob Johnson",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <p className="testimonials-quote">
        “{testimonials[currentIndex].quote}”
      </p>

      <div className="testimonials-author">
        — {testimonials[currentIndex].author}
      </div>

      <div className="testimonials-nav">
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}

export default Testimonials;
