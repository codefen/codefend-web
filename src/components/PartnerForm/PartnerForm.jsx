import css from "./partnerform.module.css";
import { useTransition, useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { dispatch, validateForm } from "./action";

const PartnerForm = () => {
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({
    name: "",
    companyRol: "",
    email: "",
    phone: "",
    companyWebsite: "",
    companySize: "",
    country: "",
  });
  const [error, setError] = useState("");
  const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const contactSection = contactRef.current;
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        const offset = -100;
        window.scrollBy({ top: offset, behavior: "smooth" });
      }
    }
  }, [location]);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (validateForm(data)) {
      setError("");
      startTransition(() => {
        dispatch(data).then((res) => {
          if (res) {
            e.target.reset();
            navigate("/home", {
              replace: true,
              unstable_viewTransition: true,
              preventScrollReset: false,
            });
            window.scrollTo(0, 0);
          } else {
            setError("Failed to send message. Please try again.");
          }
        });
      });
    } else {
      setError("All fields are required");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <article
      ref={contactRef}
      className={css.partneforFormContainer}
      id="contact"
    >
      <h3>DISTRIBUTOR CONTACT FORM </h3>
      <p>
        Unlock a lucrative opportunity with Codefend by becoming one of our
        trusted distributors.{" "}
      </p>
      <form className={css.partnerForm} onSubmit={onSubmit}>
        {Object.entries(formData).map(([key, value], i) => (
          <input
            key={i}
            name={key}
            placeholder={
              key.charAt(0).toUpperCase() +
              key.slice(1).replace(/([A-Z])/g, " $1")
            }
            type={key === "email" ? "email" : "text"}
            autoComplete={
              key === "email"
                ? "email"
                : key === "name"
                ? "name"
                : key === "phone"
                ? "tel"
                : "off"
            }
            required
            value={value}
            onChange={handleChange}
          />
        ))}
        {error && <p className={css.errorMessage}>{error}</p>}
        <button type="submit" disabled={isPending}>
          Submit
        </button>
      </form>
    </article>
  );
};

export default PartnerForm;
