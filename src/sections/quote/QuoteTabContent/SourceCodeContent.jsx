import { useMemo, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { QuoteLayout } from "../QuoteLayout";
import { QuoteInput } from "../../../components/QuoteInput";
import { useQuoteStore } from "../../../store/useQuoteStore";
import css from "../quote.module.scss";
import { usGoToBottom } from "../../../hooks/useGoToBottom";
import {
  DEFAULT_SOURCE_APP,
  SOURCECODE_DESCRIPTION,
  TAB_SOURCE_ID,
} from "../../../data/quote/sourceCode";
import { sendMetrics } from "../../../data/quote/general";
import { sizeOptions } from "../../../data/quote/web";

export const SourceCodeTabContent = ({ t, isActive }) => {
  const {
    quotes: { sourceCode, ...others },
    addQuote,
    removeQuote,
    updateQuote,
    validationQuote,
    validationSingleQuote,
    identifier,
  } = useQuoteStore();
  const ref = useRef();
  usGoToBottom(ref, [sourceCode.length]);

  const isAddButtonDisabled = useMemo(
    () =>
      sourceCode.some(
        (app) =>
          app?.url?.trim() === "" ||
          app.size === DEFAULT_SOURCE_APP.size ||
          app.size === "" ||
          app?.repoError !== undefined ||
          app?.sizeError !== undefined
      ),
    [sourceCode]
  );

  const addSourceCodeRepository = () => {
    validationQuote("sourceCode");
    addQuote("sourceCode", DEFAULT_SOURCE_APP);
    sendMetrics(identifier, { ...others, sourceCode });
  };
  const onVerify = (type, index) => {
    validationSingleQuote(type, index);
  };
  if (!isActive) return null;
  return (
    <QuoteLayout
      title={t.title}
      description={t.description}
      id={TAB_SOURCE_ID}
      quoteDescriptions={SOURCECODE_DESCRIPTION}
    >
      <div className={css.quoteLeftContainerTop}>
        <div ref={ref} className="scroll-area">
          <AnimatePresence initial={false}>
            {sourceCode.map((app, i) => (
              <QuoteInput
                key={`sourceCode-${i}`}
                index={i}
                onTargetChange={(value) =>
                  updateQuote("sourceCode", i, "repo", value)
                }
                onSizeChange={(value) =>
                  updateQuote("sourceCode", i, "size", value)
                }
                onRemove={() => removeQuote("sourceCode", i)}
                onVerifyInputs={() => onVerify("sourceCode", i)}
                savedApp={app}
                errors={{ target: app?.repoError, size: app?.sizeError }}
                targetLabel={t.targetLabel}
                defaultApp={DEFAULT_SOURCE_APP}
                defaultSizeOptions={sizeOptions(t.sizeLabel)}
              />
            ))}
          </AnimatePresence>
        </div>
        <div className={css.quoteAddSection}>
          <button
            className={`commonButton ${css.addButton}`}
            onClick={addSourceCodeRepository}
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
