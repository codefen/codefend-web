import { useMemo, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { QuoteLayout } from "../QuoteLayout";
import { QuoteInput } from "../../../components/QuoteInput";
import { useQuoteStore } from "../../../store/useQuoteStore";
import css from "../quote.module.scss";
import { usGoToBottom } from "../../../hooks/useGoToBottom";
import {
  checkValue,
  DEFAULT_SOCIAL_APP,
  SOCIAL_DESCRIPTION,
  SOCIAL_SIZE_OPTIONS,
  TAB_SOCIAL_ID,
} from "../../../data/quote/social";
import { sendMetrics } from "../../../data/quote/general";

export const SocialTabContent = ({ isActive }) => {
  const {
    quotes: { socialEngine, ...others },
    addQuote,
    removeQuote,
    updateQuote,
    validationQuote,
    validationSingleQuote,
    identifier,
  } = useQuoteStore();
  const ref = useRef();
  usGoToBottom(ref, [socialEngine.length]);

  const isAddButtonDisabled = useMemo(
    () =>
      socialEngine.some(
        (app) =>
          !app?.number ||
          app.size === DEFAULT_SOCIAL_APP.size ||
          app.size === "" ||
          app?.numberError !== undefined ||
          app?.sizeError !== undefined
      ),
    [socialEngine]
  );

  const addUserRoleGroup = () => {
    validationQuote("socialEngine");
    addQuote("socialEngine", DEFAULT_SOCIAL_APP);
    sendMetrics(identifier, { ...others, socialEngine });
  };
  const onVerify = (type, index) => {
    validationSingleQuote(type, index);
  };
  if (!isActive) return null;
  return (
    <QuoteLayout
      title="Social Engineering Attacks"
      description="Use this section to add the social engineering scenarios you want to simulate. We classify social engineering techniques into 3 pre-defined categories based on the complexity and potential impact."
      id={TAB_SOCIAL_ID}
      quoteDescriptions={SOCIAL_DESCRIPTION}
    >
      <div className={css.quoteLeftContainerTop}>
        <div ref={ref} className="scroll-area">
          <AnimatePresence initial={false}>
            {socialEngine.map((app, i) => (
              <QuoteInput
                key={`social-${i}`}
                index={i}
                onTargetChange={(value) =>
                  updateQuote("socialEngine", i, "number", value)
                }
                onSizeChange={(value) =>
                  updateQuote("socialEngine", i, "size", value)
                }
                onRemove={() => removeQuote("socialEngine", i)}
                onVerifyInputs={() => onVerify("socialEngine", i)}
                savedApp={app}
                errors={{ target: app?.numberError, size: app?.sizeError }}
                targetLabel="Number of Staff"
                defaultApp={DEFAULT_SOCIAL_APP}
                sizeLabel="Objective's Criticality Level"
                defaultSizeOptions={SOCIAL_SIZE_OPTIONS}
                targetType="number"
                min="1"
                step="1"
                onInput={(e) => (e.target.value = checkValue(e.target.value))}
              />
            ))}
          </AnimatePresence>
        </div>
        <div className={css.quoteAddSection}>
          <button
            className={`commonButton ${css.addButton}`}
            onClick={addUserRoleGroup}
            disabled={isAddButtonDisabled}
          >
            <img
              src="/resources/plus.svg"
              width={16}
              height={16}
              decoding="async"
              alt="plus icon"
            />
            Add a new staff role
          </button>
        </div>
      </div>
    </QuoteLayout>
  );
};
