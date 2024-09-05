import { testimonials } from "../data";
import TestimonialCard from "../components/TestimonialCard";

// testimonials[0] = Chris Testimonials
// testimonials[1] = Fran Testimonials
// testimonials[2] = Edd Testimonials
const USE_TESTIMONIALS = [testimonials[0], testimonials[2]];

const Linkedin = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="title">
          <h2>Linkedin testimonials</h2>
        </div>

        <div className="contain">
          {USE_TESTIMONIALS.map((testimonialGroup, groupIndex) => (
            <div
              key={groupIndex}
              className="slide-contain"
              aria-roledescription="carousel"
            >
              <div
                className={`row-contain slide-animation slide-animation-${
                  groupIndex + 1
                }`}
                aria-live="off"
                aria-atomic="true"
                aria-busy="false"
              >
                {testimonialGroup.map((tes, i) => (
                  <TestimonialCard
                    key={`${tes.name}-${i}`}
                    description={tes.description}
                    image={tes.image}
                    name={tes.name}
                    rol={tes.rol}
                  />
                ))}
                {testimonialGroup.map((tes, i) => (
                  <TestimonialCard
                    key={`${tes.name}-${i}`}
                    description={tes.description}
                    image={tes.image}
                    name={tes.name}
                    rol={tes.rol}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Linkedin;
