import TestimonialCard from "../components/TestimonialCard";
import { useLocales } from "../store/useLocales";

// tt.slides[0] = Chris Testimonials
// tt.slides[1] = Fran Testimonials / desactivado
// tt.slides[2] = Edd Testimonials

const Linkedin = () => {
  const { t } = useLocales();
  const tt = t("layout.testimonials.section.content");
  return (
    <section className="about-us">
      <div className="container">
        <div className="title">
          <h2>{tt.title}</h2>
        </div>

        <div className="contain">
          {tt.slides
            .filter((testimonialGroup) => !testimonialGroup?.disabled)
            .map((group, groupIndex) => (
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
                  {group.testimonials.map((testimonial, i) => (
                    <TestimonialCard
                      key={`${testimonial.name}-${i}`}
                      name={testimonial.name}
                      image={testimonial.image}
                      rol={testimonial.rol}
                      description={testimonial.description}
                    />
                  ))}
                  {group.testimonials.map((testimonial, i) => (
                    <TestimonialCard
                      key={`${testimonial.name}-${i}`}
                      name={testimonial.name}
                      image={testimonial.image}
                      rol={testimonial.rol}
                      description={testimonial.description}
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
