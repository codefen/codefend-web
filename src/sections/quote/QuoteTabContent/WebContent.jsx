import { useMemo, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { QuoteLayout } from "../QuoteLayout";
import { QuoteInput } from "../../../components/QuoteInput";
import { useQuoteStore } from "../../../store/useQuoteStore";
import {
  DEFAULT_WEB_APP,
  sizeOptions,
  TAB_WEB_ID,
  WEB_DESCRIPTION,
} from "../../../data/quote/web";
import css from "../quote.module.scss";
import { usGoToBottom } from "../../../hooks/useGoToBottom";
import { sendMetrics } from "../../../data/quote/general";

export const WebTabContent = ({ isActive, t }) => {
  const {
    quotes: { web, ...others },
    addQuote,
    removeQuote,
    updateQuote,
    validationQuote,
    validationSingleQuote,
    identifier,
  } = useQuoteStore();
  const ref = useRef();
  usGoToBottom(ref, [web.length]);

  const isAddButtonDisabled = useMemo(
    () =>
      web.some(
        (app) =>
          app?.domain?.trim() === "" ||
          app.size === DEFAULT_WEB_APP.size ||
          app.size === "" ||
          app?.domainError !== undefined ||
          app?.sizeError !== undefined
      ),
    [web]
  );

  const addWebAPP = () => {
    validationQuote("web");
    addQuote("web", DEFAULT_WEB_APP);
    sendMetrics(identifier, { ...others, web });
  };
  const onVerify = (type, index) => {
    validationSingleQuote(type, index);
  };
  if (!isActive) return null;
  return (
    <QuoteLayout title={t.title} description={t.description} id={TAB_WEB_ID}>
      <div className={css.quoteLeftContainerTop}>
        <div ref={ref} className="scroll-area">
          <AnimatePresence initial={false}>
            {web.map((app, i) => (
              <QuoteInput
                key={`webapp-${i}`}
                index={i}
                onTargetChange={(value) =>
                  updateQuote("web", i, "domain", value)
                }
                onSizeChange={(value) => updateQuote("web", i, "size", value)}
                onRemove={() => removeQuote("web", i)}
                onVerifyInputs={() => onVerify("web", i)}
                savedApp={app}
                errors={{ target: app.domainError, size: app.sizeError }}
                targetLabel={t.targetLabel}
                defaultSizeOptions={sizeOptions(t.sizeLabel)}
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
            {t.addBtn}
          </button>
        </div>
      </div>
    </QuoteLayout>
  );
};
