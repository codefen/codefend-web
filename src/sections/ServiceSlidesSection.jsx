import { servicesSlides } from "../data/serviceSlides";
import ServiceSlide from "../components/ServiceSlide/ServiceSlide";

const ServiceSlidesSection = () =>
  servicesSlides.map((serviceSlide, i) => (
    <section key={serviceSlide.id} className={`section-${i + 1}`}>
      <ServiceSlide serviceSlide={serviceSlide} />
    </section>
  ));

export default ServiceSlidesSection;
