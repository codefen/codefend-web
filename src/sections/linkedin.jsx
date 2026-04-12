import { useRef, useState, useCallback } from "react";
import TestimonialCard from "../components/TestimonialCard";
import { useLocales } from "../store/useLocales";

const Linkedin = () => {
  const { t } = useLocales();
  const tt = t("layout.testimonials.section.content");

  // Flatten all active testimonials into one list
  const allTestimonials = tt.slides
    .filter((group) => !group?.disabled)
    .flatMap((group) => group.testimonials);

  // Drag-to-scroll logic
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = useCallback((e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
    scrollRef.current.style.userSelect = "none";
  }, []);

  const onMouseLeave = useCallback(() => {
    isDragging.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
      scrollRef.current.style.userSelect = "";
    }
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
      scrollRef.current.style.userSelect = "";
    }
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  // Touch support
  const touchStart = useRef(0);
  const touchScrollLeft = useRef(0);

  const onTouchStart = useCallback((e) => {
    touchStart.current = e.touches[0].pageX;
    touchScrollLeft.current = scrollRef.current.scrollLeft;
  }, []);

  const onTouchMove = useCallback((e) => {
    const walk = (touchStart.current - e.touches[0].pageX) * 1.2;
    scrollRef.current.scrollLeft = touchScrollLeft.current + walk;
  }, []);

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2>{tt.title}</h2>
          <p className="testimonials-hint">← drag to explore →</p>
        </div>
      </div>

      <div
        className="testimonials-track-wrap"
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
      >
        <div className="testimonials-track">
          {allTestimonials.map((testimonial, i) => (
            <TestimonialCard
              key={`${testimonial.name}-${i}`}
              name={testimonial.name}
              image={testimonial.image}
              role={testimonial.role}
              description={testimonial.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Linkedin;
