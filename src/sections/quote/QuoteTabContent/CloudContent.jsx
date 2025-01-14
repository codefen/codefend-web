import { useMemo, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { QuoteLayout } from "../QuoteLayout";
import { QuoteInput } from "../../../components/QuoteInput";
import { useQuoteStore } from "../../../store/useQuoteStore";
import css from "../quote.module.scss";
import { usGoToBottom } from "../../../hooks/useGoToBottom";
import {
  CLOUD_DESCRIPTION,
  DEFAULT_CLOUD_APP,
  TAB_CLOUD_ID,
} from "../../../data/quote/cloud";

export const CloudTabContent = ({ isActive }) => {
  const {
    quotes: { cloud },
    addQuote,
    removeQuote,
    updateQuote,
    validationQuote,
    validationSingleQuote,
  } = useQuoteStore();
  const ref = useRef();
  usGoToBottom(ref, [cloud.length]);

  const isAddButtonDisabled = useMemo(
    () =>
      cloud.some(
        (app) =>
          app?.provider?.trim() === "" ||
          app.size === DEFAULT_CLOUD_APP.size ||
          app.size === "" ||
          app?.providerError !== undefined ||
          app?.sizeError !== undefined
      ),
    [cloud]
  );

  const addWebAPP = () => {
    validationQuote("cloud");
    addQuote("cloud", DEFAULT_CLOUD_APP);
  };
  const onVerify = (type, index) => {
    validationSingleQuote(type, index);
  };
  if (!isActive) return null;
  return (
    <QuoteLayout
      title="Cloud Providers"
      description="Add from this section the cloud providers you want to assess. We classify cloud providers into 3 pre-defined sizes based on an estimated scale."
      id={TAB_CLOUD_ID}
      quoteDescriptions={CLOUD_DESCRIPTION}
    >
      <div className={css.quoteLeftContainerTop}>
        <div ref={ref} className="scroll-area">
          <AnimatePresence initial={false}>
            {cloud.map((app, i) => (
              <QuoteInput
                key={`cloud-${i}`}
                index={i}
                onTargetChange={(value) =>
                  updateQuote("cloud", i, "provider", value)
                }
                onSizeChange={(value) => updateQuote("cloud", i, "size", value)}
                onRemove={() => removeQuote("cloud", i)}
                onVerifyInputs={() => onVerify("cloud", i)}
                savedApp={app}
                errors={{ target: app?.providerError, size: app?.sizeError }}
                targetLabel="Provider Name"
                defaultApp={DEFAULT_CLOUD_APP}
                sizeLabel="Provider size"
              />
            ))}
          </AnimatePresence>
        </div>
        <div className={css.quoteAddSection}>
          <button
            className={`commonButton ${css.addButton}`}
            onClick={addWebAPP}
            disabled={isAddButtonDisabled}
          >
            <img
              src="/resources/plus.svg"
              width={16}
              height={16}
              decoding="async"
              alt="plus icon"
            />
            Add a new cloud application
          </button>
        </div>
      </div>
    </QuoteLayout>
  );
};
