import { useMemo, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { QuoteLayout } from "../QuoteLayout";
import { QuoteInput } from "../../../components/QuoteInput";
import { useQuoteStore } from "../../../store/useQuoteStore";
import css from "../quote.module.scss";
import { usGoToBottom } from "../../../hooks/useGoToBottom";
import {
  DEFAULT_MOBILE_APP,
  MOBILE_DESCRIPTION,
  TAB_MOBILE_ID,
} from "../../../data/quote/mobile";

export const MobileTabContent = ({ isActive }) => {
  const {
    quotes: { mobile },
    addQuote,
    removeQuote,
    updateQuote,
    validationQuote,
    validationSingleQuote,
  } = useQuoteStore();
  const ref = useRef();
  usGoToBottom(ref, [mobile.length]);

  const isAddButtonDisabled = useMemo(
    () =>
      mobile.some(
        (app) =>
          app?.url?.trim() === "" ||
          app.size === DEFAULT_MOBILE_APP.size ||
          app.size === "" ||
          app?.urlError !== undefined ||
          app?.sizeError !== undefined
      ),
    [mobile]
  );

  const addMobileApp = () => {
    validationQuote("mobile");
    addQuote("mobile", DEFAULT_MOBILE_APP);
  };
  const onVerify = (type, index) => {
    validationSingleQuote(type, index);
  };
  if (!isActive) return null;
  return (
    <QuoteLayout
      title="Mobile Applications"
      description="Add from this section the mobile applications you want to pentest. We classify mobile applications into 3 pre-defined sizes based on an estimated scale."
      id={TAB_MOBILE_ID}
      quoteDescriptions={MOBILE_DESCRIPTION}
    >
      <div className={css.quoteLeftContainerTop}>
        <div ref={ref} className="scroll-area">
          <AnimatePresence initial={false}>
            {mobile.map((app, i) => (
              <QuoteInput
                key={`mobile-${i}`}
                index={i}
                onTargetChange={(value) =>
                  updateQuote("mobile", i, "url", value)
                }
                onSizeChange={(value) =>
                  updateQuote("mobile", i, "size", value)
                }
                onRemove={() => removeQuote("mobile", i)}
                onVerifyInputs={() => onVerify("mobile", i)}
                savedApp={app}
                errors={{ target: app?.urlError, size: app?.sizeError }}
                targetLabel="Store app url"
                defaultApp={DEFAULT_MOBILE_APP}
              />
            ))}
          </AnimatePresence>
        </div>
        <div className={css.quoteAddSection}>
          <button
            className={`commonButton ${css.addButton}`}
            onClick={addMobileApp}
            disabled={isAddButtonDisabled}
          >
            <img
              src="/resources/plus.svg"
              width={16}
              height={16}
              decoding="async"
              alt="plus icon"
            />
            Add a new mobile application
          </button>
        </div>
      </div>
    </QuoteLayout>
  );
};
