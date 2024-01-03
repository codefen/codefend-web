import React, { useState, useRef, useEffect } from 'react';

const cardData = [1, 2, 3]; // Contenido de las cartas

const Compliance = () => {
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [draggedDistance, setDraggedDistance] = useState(0);
  const carouselRef = useRef(null);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const distance = e.clientX - dragStartX;
      setDraggedDistance(distance);
      const carouselWidth = cardData.length * 100;
      const offset = (distance % carouselWidth) / carouselWidth;
      setIndex(Math.floor(cardData.length * offset + index + 0.5) % cardData.length);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    setDragStartX(0);
    setDraggedDistance(0);
  };

  useEffect(() => {
    const handleMouseLeave = () => {
      if (dragging) {
        handleMouseUp();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  useEffect(() => {
    if (!dragging && draggedDistance !== 0) {
      const carouselWidth = cardData.length * 100;
      const offset = draggedDistance / carouselWidth;
      setIndex(Math.floor(cardData.length * offset + index + 0.5) % cardData.length);
      setDraggedDistance(0);
    }
  }, [dragging, draggedDistance, index, cardData.length]);

  return (
    <div
      className="carousel-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    >
      <button onClick={handlePrev}>Prev</button>
      <div
        className={`carousel ${dragging ? 'dragging' : ''}`}
        ref={carouselRef}
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {cardData.map((item, i) => (
          <div key={i} className="card">
            {item}
          </div>
        ))}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Compliance;
