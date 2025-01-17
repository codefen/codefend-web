import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Select } from "../components/Select";
import {
  companySizeOptions,
  rolesOptions,
  routesMap,
} from "../data/contact/contact";
import { StatusMessage } from "../components/StatusMessage";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { InputField } from "../components/InputField";
import { useContactForm } from "../hooks/useFreeTrialForm";
import { useScrolLToRef } from "../hooks/useScrolLToRef";

const FreeTrial = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(0);
  const { img1Ref, img2Ref } = useScrollAnimation(currentPage);
  const {
    formData,
    handleInputChange,
    onChangeSelect,
    isSubmitting,
    submitForm,
    statusMessage,
  } = useContactForm();
  const ref = useRef(null);
  useScrolLToRef(ref);

  // Mapeo de rutas para establecer currentPage
  useEffect(() => {
    setCurrentPage(routesMap[location.pathname] || 0);
  }, [location.pathname]);

  return (
    <section className="free-trial" id="contact" ref={ref}>
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

          <form onSubmit={submitForm}>
            <InputField
              name="lead_fname"
              placeholder="First name"
              value={formData.lead_fname}
              onChange={handleInputChange}
            />
            <InputField
              name="lead_lname"
              placeholder="Last name"
              value={formData.lead_lname}
              onChange={handleInputChange}
            />
            <InputField
              type="email"
              name="lead_email"
              placeholder="Email"
              value={formData.lead_email}
              onChange={handleInputChange}
            />
            <InputField
              type="tel"
              name="lead_phone"
              placeholder="Phone number"
              value={formData.lead_phone}
              onChange={handleInputChange}
            />
            <InputField
              name="company_name"
              placeholder="Company Name"
              value={formData.company_name}
              onChange={handleInputChange}
            />
            <InputField
              name="company_web"
              placeholder="example.com"
              value={formData.company_web}
              onChange={handleInputChange}
            />
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
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </div>
          </form>

          {statusMessage && (
            <StatusMessage
              type={statusMessage.type}
              message={statusMessage.message}
            />
          )}
        </div>

        <div className="img-contain">
          <img
            ref={img1Ref}
            src="/images/front.webp"
            alt="Front Illustration"
          />
          <img ref={img2Ref} src="/images/back.webp" alt="Back Illustration" />
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;
