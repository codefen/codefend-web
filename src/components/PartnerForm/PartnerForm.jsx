import css from "./partnerform.module.css";
import { useTransition } from "react";

const dispatch = async (formData) => {
  console.log({ name: formData.get("name") });
  const data = {
    fullName: formData.get("name"),
    companyRol: formData.get("companyRol"),
    email: formData.get("email"),
    phoneNumber: formData.get("phone"),
    companyWebsite: formData.get("companyWebsite"),
    companySize: formData.get("companySize"),
    country: formData.get("country"),
  };
  const res = await fetch(
    "https://formspree.io/f/{form_id}",
    JSON.stringify(data),
    {
      headers: { Accept: "application/json" },
    }
  );
  if (res.ok) {
    return true;
  }
  return false;
};

const PartnerForm = () => {
  const [isPending, startTransition] = useTransition();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    startTransition(() => {
      dispatch(formData);
      e.target.reset();
    });
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
        <input
          name="name"
          placeholder="Full name"
          type="text"
          autoComplete="name"
          required
        />
        <input
          name="companyRol"
          placeholder="Role in company"
          type="text"
          autoComplete="off"
        />
        <input
          name="email"
          placeholder="Work email"
          type="email"
          autoComplete="email"
          required
        />
        <input
          name="phone"
          placeholder="Phone number"
          type="text"
          autoComplete="tel"
        />
        <input
          name="companyWebsite"
          placeholder="Company website"
          type="text"
          autoComplete="off"
          required
        />
        <input
          name="companySize"
          placeholder="Company size"
          type="text"
          autoComplete="off"
          required
        />
        <input placeholder="Country" type="text" autoComplete="off" required />
        <button type="submit" disabled={isPending}>
          Submit
        </button>
      </form>
    </article>
  );
};

export default PartnerForm;
