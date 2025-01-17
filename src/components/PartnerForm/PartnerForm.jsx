import css from "./partnerform.module.css";
import { useState, useTransition } from "react";
import { DEFAULT_FORM_DATA, dispatch, validateForm } from "./action";
import { toast } from "react-toastify";

const PartnerForm = () => {
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
            toast.success(
              "Your contact has been sent successfully. In a few days someone from the team will be contacting you."
            );
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
    <article className={css.partneforFormContainer}>
      <h3>DISTRIBUTOR CONTACT FORM </h3>
      <p>
        Unlock a lucrative opportunity with Codefend by becoming one of our
        trusted distributors.{" "}
      </p>
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
