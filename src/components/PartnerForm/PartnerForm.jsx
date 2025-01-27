import css from "./partnerform.module.css";
import { useState, useTransition } from "react";
import { DEFAULT_FORM_DATA, dispatch, validateForm } from "./action";
import { toast } from "react-toastify";

const PartnerForm = ({ t }) => {
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (validateForm(data)) {
      setError("");
      startTransition(() => {
        dispatch(data).then((res) => {
          if (res) {
            setFormData(DEFAULT_FORM_DATA);
            toast.success(t.successMessage);
          } else {
            setError(t.errorMessage);
          }
        });
      });
    } else {
      setError(t.requiredMessage);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <article className={css.partneforFormContainer}>
      <h3>{t.title}</h3>
      <p>{t.description}</p>
      <form
        className={css.partnerForm}
        onSubmit={onSubmit}
        action="https://formspree.io/f/{form_id}"
        method="post"
      >
        {Object.entries(formData).map(([key, value], i) => (
          <input
            key={i}
            name={key}
            placeholder={t.fieldsPlaceholders[key]}
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
          {t.btn}
        </button>
      </form>
    </article>
  );
};

export default PartnerForm;
