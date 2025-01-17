import { useEffect } from "react";
import { useQuoteStore } from "../../store/useQuoteStore";
import css from "./sendproposal.module.scss";
import { sendMetrics } from "../../data/quote/general";
import ModalWrapper from "../ModalWrapper";

export const SendProposalModal = () => {
  const {
    toggleModal,
    sending,
    addIdentifier,
    identifier,
    quotes,
    toggleCoffeti,
  } = useQuoteStore();

  useEffect(() => {
    if (sending) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sending]);

  const onChange = (key, value) => addIdentifier(key, value);

  const onSubmit = (e) => {
    e.preventDefault();
    toggleModal(false);
    sendMetrics(identifier, quotes);
    toggleCoffeti(true);
  };
  if (!sending) {
    return null;
  }
  return (
    <ModalWrapper
      showCloseBtn
      action={() => toggleModal(false)}
      type={css.modalSend}
    >
      <h1>Send Proposal</h1>

      <div className={css.formContainer}>
        <form onSubmit={onSubmit}>
          <div className="input-group">
            <label htmlFor="email">
              Email <span className={css.required}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => onChange("email", e.target.value)}
              placeholder="Write your enterprise email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              onChange={(e) => onChange("phone", e.target.value)}
              placeholder="Write your enterprise phone (Optional)"
            />
          </div>

          <button
            type="submit"
            disabled={!identifier.email && !identifier.phone}
            className="btn"
          >
            Send
          </button>
        </form>
      </div>
    </ModalWrapper>
  );
};
