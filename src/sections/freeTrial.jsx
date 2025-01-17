import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Select } from "../components/Select";
import {
  companySizeOptions,
  DEFAULT_COMPANY_SIZE,
  DEFAULT_FORM_DATA,
  DEFAULT_ROLE,
  rolesOptions,
  routesMap,
} from "../data/contact/contact";

const FreeTrial = () => {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const [scrolly, setScrolly] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const location = useLocation();

  // Estados del formulario
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  const [statusMessage, setStatusMessage] = useState(null);

  // Manejador de cambio para los campos
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onChangeSelect = (value, key) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // Manejador de envío del formulario
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = `https://kundalini.codefend.com/kundalini/index.php?model=users%2Fnew&${new URLSearchParams(
      {
        ...formData,
        reseller_name: "Codefend",
        reseller_id: "77",
        phase: "1",
      }
    )}`;

    try {
      const response = await fetch(apiUrl, { method: "POST" });
      const data = await response.json();
      if (data.success) {
        setStatusMessage({
          type: "success",
          message: "Form submitted successfully!",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setStatusMessage({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    }
  };

  // Mapeo de rutas para establecer currentPage
  useEffect(() => {
    setCurrentPage(routesMap[location.pathname] || 0);
  }, [location.pathname]);

  // Animación de imágenes con scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolly(window.scrollY);
      const offset = scrolly - currentPage;

      // Verificar que img1 y img2 no sean nulos antes de acceder a style
      if (img1.current && img2.current) {
        if (offset > 0) {
          img1.current.style.top = `${offset / 5}px`;
          img2.current.style.bottom = `${offset / 5}px`;
        } else {
          img1.current.style.top = "0px";
          img2.current.style.bottom = "0px";
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth <= 820) {
        window.removeEventListener("scroll", handleScroll);
      } else {
        window.addEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrolly, currentPage]);

  return (
    <section className="free-trial" id="contact">
      <div className="container">
        <div className="form-contain">
          <div className="title">
            <h1>Contact us</h1>
            <b>We’re here to help you secure your systems.</b>
            <p>
              Have questions or need assistance? Reach out to us by filling out
              the form below, and our team will get back to you as soon as
              possible.
            </p>
          </div>

          <form onSubmit={handleFormSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="lead_fname"
                placeholder="First name"
                value={formData.lead_fname}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="lead_lname"
                placeholder="Last name"
                value={formData.lead_lname}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="lead_email"
                placeholder="Email"
                value={formData.lead_email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="tel"
                name="lead_phone"
                placeholder="Phone number"
                value={formData.lead_phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="company_name"
                placeholder="Company Name"
                value={formData.company_name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="company_web"
                placeholder="example.com"
                value={formData.company_web}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <Select
                name="company_size"
                defaultValue={formData.company_size}
                onChange={(value) => onChangeSelect(value, "company_size")}
                values={companySizeOptions}
              ></Select>
            </div>
            <div className="input-group">
              <Select
                name="lead_role"
                defaultValue={formData.lead_role}
                onChange={(value) => onChangeSelect(value, "lead_role")}
                values={rolesOptions}
              ></Select>
            </div>
            <div className="input-group">
              <textarea
                name="company_area"
                placeholder="Write your message here"
                rows="5"
                value={formData.company_area}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <div className="extra-group">
              <button type="submit">Send</button>
            </div>
          </form>

          {statusMessage && (
            <div
              id={
                statusMessage.type === "success"
                  ? "messageSuccess"
                  : "messageDanger"
              }
              style={{ display: "block", marginTop: "1rem" }}
            >
              {statusMessage.message}
            </div>
          )}
        </div>

        <div className="img-contain">
          <img ref={img1} src="/images/front.webp" alt="Front Illustration" />
          <img ref={img2} src="/images/back.webp" alt="Back Illustration" />
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;
