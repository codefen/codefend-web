import { useState } from "react";

const TestimonialCard = ({ description, image, name, role }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const namePattern = name.replace(/\s+/g, "-").toLowerCase();

  return (
    <article
      className="testimonial-card"
      role="article"
      aria-label={`Testimonial from ${name}`}
    >
      {/* Quote text — top */}
      <div className="testimonial-quote">
        <span className="testimonial-quote-mark">"</span>
        <p>{description}</p>
      </div>

      {/* Person info — bottom */}
      <div className="testimonial-person">
        <div className="testimonial-avatar">
          {!isImageLoaded && <div className="avatar-skeleton" role="img" aria-label="Loading" />}
          <img
            src={image}
            alt={`${name} profile`}
            onLoad={() => setIsImageLoaded(true)}
            style={{ opacity: isImageLoaded ? 1 : 0 }}
            loading="lazy"
            decoding="async"
            width={52}
            height={52}
          />
        </div>
        <div className="testimonial-meta">
          <strong id={`name-${namePattern}`}>{name}</strong>
          <span>{role}</span>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
