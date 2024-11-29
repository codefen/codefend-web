import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const FreeTrial = () => {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const [scrolly, setScrolly] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const location = useLocation();

  // Estados del formulario
  const [formData, setFormData] = useState({
    lead_fname: "",
    lead_lname: "",
    lead_role: "",
    lead_email: "",
    lead_phone: "",
    company_name: "",
    company_web: "",
    company_size: "",
    company_area: "",
  });

  const [statusMessage, setStatusMessage] = useState(null);

  // Manejador de cambio para los campos
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
        setStatusMessage({ type: "success", message: "Form submitted successfully!" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setStatusMessage({ type: "error", message: "An error occurred. Please try again." });
    }
  };

  // Mapeo de rutas para establecer currentPage
  useEffect(() => {
    const routesMap = {
      "/": 3300,
      "/home": 3300,
      "/software": 3700,
      "/industries": 2700,
      "/services": 4700,
      "/compliance": 1700,
      "/partners": 1000,
      "/about-us": 2000,
    };
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
              <select
                name="company_size"
                value={formData.company_size}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled hidden>
                  Select Company Size
                </option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value=">500">&gt;500</option>
              </select>
            </div>
            <div className="input-group">
              <select
                name="lead_role"
                value={formData.lead_role}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled hidden>
                  Select Role
                </option>
                <option value="admin">Administrative</option>
                <option value="human">Human Resources</option>
                <option value="info">Information Technology</option>
                <option value="ads">Marketing</option>
                <option value="sales">Sales</option>
                <option value="finance">Finance</option>
                <option value="cs">Customer Service</option>
                <option value="prod">Production & Ops</option>
                <option value="plan">Strategy & Planning</option>
                <option value="law">Legal Affairs</option>
              </select>
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
                statusMessage.type === "success" ? "messageSuccess" : "messageDanger"
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