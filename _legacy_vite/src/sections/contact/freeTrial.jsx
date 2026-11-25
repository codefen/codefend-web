import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Select } from "../../components/Select";
import {
  companySizeOptions,
  DEFAULT_ROLE,
  routesMap,
} from "../../data/contact/contact";
import { StatusMessage } from "../../components/StatusMessage";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { InputField } from "../../components/InputField";
import { useFreeTrialForm } from "./useFreeTrialForm";
import { useScrolLToRef } from "../../hooks/useScrolLToRef";

const FreeTrial = ({ t, locale }) => {
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
  } = useFreeTrialForm(t.form.messages);
  const ref = useRef(null);
  useScrolLToRef(ref);

  // Mapeo de rutas para establecer currentPage
  useEffect(() => {
    setCurrentPage(routesMap(locale)[location.pathname] || 0);
  }, [location.pathname]);

  return (
    <section className="free-trial" id="contact" ref={ref}>
      <div className="container">
        <div className="form-contain">
          <div className="title">
            <h1>{t.title}</h1>
            <b>{t.subtitle}</b>
            <p>{t.description}</p>
          </div>

          <form onSubmit={submitForm}>
            <InputField
              name="lead_fname"
              placeholder={t.form.inputs.lead_fname}
              value={formData.lead_fname}
              onChange={handleInputChange}
            />{" "}
            <InputField
              name="lead_lname"
              placeholder={t.form.inputs.lead_lname}
              value={formData.lead_lname}
              onChange={handleInputChange}
            />{" "}
            <InputField
              type="email"
              name="lead_email"
              placeholder={t.form.inputs.lead_email}
              value={formData.lead_email}
              onChange={handleInputChange}
            />{" "}
            <InputField
              type="tel"
              name="lead_phone"
              placeholder={t.form.inputs.lead_phone}
              value={formData.lead_phone}
              onChange={handleInputChange}
            />{" "}
            <InputField
              name="company_name"
              placeholder={t.form.inputs.company_name}
              value={formData.company_name}
              onChange={handleInputChange}
            />{" "}
            <InputField
              name="company_web"
              placeholder={t.form.inputs.company_web}
              value={formData.company_web}
              onChange={handleInputChange}
            />
            <div className="input-group">
              <Select
                name="company_size"
                defaultValue={formData.company_size}
                onChange={(value) => onChangeSelect(value, "company_size")}
                values={companySizeOptions(t.form.inputs.company_size)}
              ></Select>
            </div>
            <div className="input-group">
              <Select
                name="lead_role"
                defaultValue={formData.lead_role}
                onChange={(value) => onChangeSelect(value, "lead_role")}
                values={[DEFAULT_ROLE(t.form.inputs.lead_role.default)].concat(
                  t.form.inputs.lead_role.labels
                )}
              ></Select>
            </div>
            <div className="input-group">
              <textarea
                name="company_area"
                placeholder={t.form.inputs.company_area}
                rows="5"
                value={formData.company_area}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="extra-group">
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? t.form.sending : t.form.send}
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
            width={625}
            height={635}
          />
          <img
            ref={img2Ref}
            src="/images/back.webp"
            alt="Back Illustration"
            width={480}
            height={480}
          />
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;
