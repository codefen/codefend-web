import css from "./partnerform.module.css";
import { useTransition } from "react";

const dispatch = (formData) => {
  console.log({ name: formData.get("fullName") });

  console.log("Sending...");
  return true;
};

const PartnerForm = () => {
  const [isPending, startTransition] = useTransition();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    startTransition(() => {
      dispatch(formData);
      console.log("Finish send.");
    });
  };
  return (
    <article className={css.partneforFormContainer}>
      <h3>DISTRIBUTOR CONTACT FORM </h3>
      <p>
        Unlock a lucrative opportunity with Codefend by becoming one of our
        trusted distributors.{" "}
      </p>
      <form className={css.partnerForm} onSubmit={onSubmit}>
        <input
          name="fullName"
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
          name="workEmail"
          placeholder="Work email"
          type="email"
          autoComplete="email"
          required
        />
        <input
          name="phoneNumber"
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
