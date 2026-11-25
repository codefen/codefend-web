import { useMemo, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { QuoteLayout } from "../QuoteLayout";
import { QuoteInput } from "../../../components/QuoteInput";
import { useQuoteStore } from "../../../store/useQuoteStore";
import css from "../quote.module.scss";
import { usGoToBottom } from "../../../hooks/useGoToBottom";
import { checkValue } from "../../../data/quote/social";
import {
  DEFAULT_IP_EXTERNAL_APP,
  IP_EXTERNAL_SIZE_OPTIONS,
  TAB_EXTERNAL_IP_ID,
} from "../../../data/quote/externalIp";
import { sendMetrics } from "../../../data/quote/general";

export const IpExternalTabContent = ({ t, isActive }) => {
  const {
    quotes: { externalIp, ...others },
    addQuote,
    removeQuote,
    updateQuote,
    validationQuote,
    validationSingleQuote,
    identifier,
  } = useQuoteStore();
  const ref = useRef();
  usGoToBottom(ref, [externalIp.length]);

  const isAddButtonDisabled = useMemo(
    () =>
      externalIp.some(
        (app) =>
          !app?.externalIpAmount ||
          app.size === DEFAULT_IP_EXTERNAL_APP.size ||
          app.size === "" ||
          app?.externalIpAmountError !== undefined ||
          app?.sizeError !== undefined
      ),
    [externalIp]
  );

  const addExternalIpGroup = () => {
    validationQuote("externalIp");
    addQuote("externalIp", DEFAULT_IP_EXTERNAL_APP);
    sendMetrics(identifier, { ...others, externalIp });
  };
  const onVerify = (type, index) => {
    validationSingleQuote(type, index);
  };
  if (!isActive) return null;
  return (
    <QuoteLayout
      title={t.title}
      description={t.description}
      id={TAB_EXTERNAL_IP_ID}
    >
      <div className={css.quoteLeftContainerTop}>
        <div ref={ref} className="scroll-area">
          <AnimatePresence initial={false}>
            {externalIp.map((app, i) => (
              <QuoteInput
                key={`externalIp-${i}`}
                index={i}
                onTargetChange={(value) =>
                  updateQuote("externalIp", i, "externalIpAmount", value)
                }
                onSizeChange={(value) =>
                  updateQuote("externalIp", i, "size", value)
                }
                onRemove={() => removeQuote("externalIp", i)}
                onVerifyInputs={() => onVerify("externalIp", i)}
                savedApp={app}
                errors={{
                  target: app?.externalIpAmountError,
                  size: app?.sizeError,
                }}
                targetLabel={t.targetLabel}
                defaultApp={DEFAULT_IP_EXTERNAL_APP}
                defaultSizeOptions={IP_EXTERNAL_SIZE_OPTIONS(t.sizeLabel)}
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
            onClick={addExternalIpGroup}
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
