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
import { sendMetrics } from "../../../data/quote/general";
import { sizeOptions } from "../../../data/quote/web";

export const MobileTabContent = ({ t, isActive }) => {
  const {
    quotes: { mobile, ...others },
    addQuote,
    removeQuote,
    updateQuote,
    validationQuote,
    validationSingleQuote,
    identifier,
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
    sendMetrics(identifier, { ...others, mobile });
  };
  const onVerify = (type, index) => {
    validationSingleQuote(type, index);
  };
  if (!isActive) return null;
  return (
    <QuoteLayout
      title={t.title}
      description={t.description}
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
                targetLabel={t.targetLabel}
                defaultApp={DEFAULT_MOBILE_APP}
                defaultSizeOptions={sizeOptions(t.sizeLabel)}
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
            {t.addBtn}
          </button>
        </div>
      </div>
    </QuoteLayout>
  );
};
