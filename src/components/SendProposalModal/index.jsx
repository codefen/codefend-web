import { useEffect, useState } from "react";
import { useQuoteStore } from "../../store/useQuoteStore";
import css from "./sendproposal.module.scss";
import { sendMetrics } from "../../data/quote/general";
import ModalWrapper from "../ModalWrapper";
import { AnimatePresence, motion } from "framer-motion";

export const SendProposalModal = () => {
  const {
    toggleModal,
    sending,
    addIdentifier,
    identifier,
    quotes,
    toggleSuccess,
  } = useQuoteStore();
  const [steps, setStep] = useState(0);

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
    sendMetrics(identifier, quotes);
    toggleSuccess(true);
    resetForm();
  };

  const onNextStep = () => {
    setStep((prev) => (prev === 0 ? 1 : 0));
  };

  const resetForm = () => {
    toggleModal(false);
    setStep(0);
    onChange("email", "");
    onChange("phone", "");
  };
  if (!sending) {
    return null;
  }
  return (
    <ModalWrapper showCloseBtn action={resetForm} type={css.modalSend}>
      <h3>Send Proposal</h3>
      <AnimatePresence mode="wait">
        <div className={css.formContainer}>
          {steps === 0 ? (
            <motion.div
              key={steps}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={css.formContent}
            >
              <div className={css.inputGroup}>
                <label htmlFor="email">
                  Write your enterprise email{" "}
                  <span className={css.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  onChange={(e) => onChange("email", e.target.value)}
                  placeholder="Email"
                />
              </div>
              <button
                type="button"
                disabled={!identifier.email}
                onClick={onNextStep}
                className="btn"
              >
                Next
              </button>
            </motion.div>
          ) : (
            <motion.form
              key={steps}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={onSubmit}
              className={css.formContent}
            >
              <div className={css.inputGroup}>
                <label htmlFor="phone">
                  Write your enterprise phone (Optional)
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  onChange={(e) => onChange("phone", e.target.value)}
                  placeholder="Phone"
                />
              </div>

              <button
                type="submit"
                disabled={!identifier.email && !identifier.phone}
                className="btn"
              >
                Send
              </button>
            </motion.form>
          )}
        </div>
      </AnimatePresence>
    </ModalWrapper>
  );
};
