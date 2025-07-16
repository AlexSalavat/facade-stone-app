import React, { useState } from "react";
import "./ProductCarousel.css";

export default function ProductCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="carousel">
      <div className="carousel-img-wrap">
        <img src={images[current]} alt={`Фото ${current + 1}`} className="carousel-img" />
      </div>
      {images.length > 1 && (
        <div className="carousel-controls">
          <button className="carousel-btn" onClick={prev}>&lt;</button>
          <div className="carousel-dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={i === current ? "carousel-dot active" : "carousel-dot"}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
          <button className="carousel-btn" onClick={next}>&gt;</button>
        </div>
      )}
    </div>
  );
}
