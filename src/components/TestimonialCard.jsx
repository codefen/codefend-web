import { useState } from "react";
import animation from "../styles/animation.module.css";

const TestimonialCard = ({ description, image, profile, name, role }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  const namePattern = name.replace(/\s+/g, "-").toLowerCase();
  return (
    <article
      className="card"
      role="article"
      aria-label={`Testimonial from ${name}`}
    >
      <p>{description}</p>
      <div>
        {!isImageLoaded && (
          <div
            role="img"
            aria-label="Loading profile image"
            className={animation.profileSkeletonLoader}
          ></div>
        )}
        <img
          src={image}
          alt="Person profile image"
          onLoad={handleImageLoad}
          style={{
            opacity: isImageLoaded ? "1" : "0",
            position: isImageLoaded ? "static" : "absolute",
          }}
          loading="lazy"
          decoding="async"
          aria-hidden={!isImageLoaded}
          data-loaded={isImageLoaded}
          width={80}
          height={80}
        />
        <p>
          <b id={`name-${namePattern}`}>{name}</b>
          <br />
          {profile && (
            <>
              Profile:{" "}
              <a
                href={`https://${profile}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-labelledby={`profile-label-${namePattern} name-${namePattern}`}
              >
                {profile}
              </a>
              <br />
            </>
          )}
          <span>{role}</span>
        </p>
      </div>
    </article>
  );
};

export default TestimonialCard;
