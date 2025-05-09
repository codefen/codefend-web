import { useMemo, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { QuoteLayout } from "../QuoteLayout";
import { QuoteInput } from "../../../components/QuoteInput";
import { useQuoteStore } from "../../../store/useQuoteStore";
import css from "../quote.module.scss";
import { usGoToBottom } from "../../../hooks/useGoToBottom";
import { checkValue } from "../../../data/quote/social";
import {
  DEFAULT_IP_INTERNAL_APP,
  IP_INTERNAL_SIZE_OPTIONS,
  TAB_INTERNAL_IP_ID,
} from "../../../data/quote/ipInternals";
import { sendMetrics } from "../../../data/quote/general";

export const IpInternalsTabContent = ({ t, isActive }) => {
  const {
    quotes: { internalIp, ...others },
    addQuote,
    removeQuote,
    updateQuote,
    validationQuote,
    validationSingleQuote,
    identifier,
  } = useQuoteStore();
  const ref = useRef();
  usGoToBottom(ref, [internalIp.length]);

  const isAddButtonDisabled = useMemo(
    () =>
      internalIp.some(
        (app) =>
          !app?.internalIpAmount ||
          app.size === DEFAULT_IP_INTERNAL_APP.size ||
          app.size === "" ||
          app?.internalIpAmountError !== undefined ||
          app?.sizeError !== undefined
      ),
    [internalIp]
  );

  const addInternalIpGroup = () => {
    validationQuote("internalIp");
    addQuote("internalIp", DEFAULT_IP_INTERNAL_APP);
    sendMetrics(identifier, { ...others, internalIp });
  };
  const onVerify = (type, index) => {
    validationSingleQuote(type, index);
  };
  if (!isActive) return null;
  return (
    <QuoteLayout
      title={t.title}
      description={t.description}
      id={TAB_INTERNAL_IP_ID}
    >
      <div className={css.quoteLeftContainerTop}>
        <div ref={ref} className="scroll-area">
          <AnimatePresence initial={false}>
            {internalIp.map((app, i) => (
              <QuoteInput
                key={`ipinternal-${i}`}
                index={i}
                onTargetChange={(value) =>
                  updateQuote("internalIp", i, "internalIpAmount", value)
                }
                onSizeChange={(value) =>
                  updateQuote("internalIp", i, "size", value)
                }
                onRemove={() => removeQuote("internalIp", i)}
                onVerifyInputs={() => onVerify("internalIp", i)}
                savedApp={app}
                errors={{
                  target: app?.internalIpAmountError,
                  size: app?.sizeError,
                }}
                targetLabel={t.targetLabel}
                defaultApp={DEFAULT_IP_INTERNAL_APP}
                defaultSizeOptions={IP_INTERNAL_SIZE_OPTIONS(t.sizeLabel)}
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
            onClick={addInternalIpGroup}
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
