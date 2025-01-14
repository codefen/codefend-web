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

export const SourceCodeTabContent = ({ isActive }) => {
  const {
    quotes: { sourceCode },
    addQuote,
    removeQuote,
    updateQuote,
    validationQuote,
    validationSingleQuote,
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

  const addMobileApp = () => {
    validationQuote("sourceCode");
    addQuote("sourceCode", DEFAULT_SOURCE_APP);
  };
  const onVerify = (type, index) => {
    validationSingleQuote(type, index);
  };
  if (!isActive) return null;
  return (
    <QuoteLayout
      title="Source Code Repositories"
      description="Add from this section the source code repositories you want to assess. We classify repositories into 3 pre-defined sizes based on an estimated scale."
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
                targetLabel="Repository url"
                defaultApp={DEFAULT_SOURCE_APP}
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
            Add a new repository
          </button>
        </div>
      </div>
    </QuoteLayout>
  );
};
