import { motion } from "framer-motion";
import css from "./quotewebinput.module.scss";
import { DEFAULT_WEB_APP, sizeOptions } from "../../data/quote/web";
import { Select } from "../Select";
import { AnimatedTrashButton } from "../AnimatedTrashButton";

export const QuoteInput = ({
  index = 0,
  onTargetChange,
  onSizeChange,
  onRemove,
  savedApp,
  onVerifyInputs,
  errors,
  targetLabel = "",
  targetPlaceHolder = "",
  sizeLabel = "System size",
  defaultApp = DEFAULT_WEB_APP,
  defaultSizeOptions = sizeOptions,
  targetType = "text",
  min,
  step,
  onInput,
}) => {
  const isFirst = index === 0;
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`${css.inputContainer} input-container`}>
        <div className={css.inputsWrapper}>
          <div className={css.inputBox}>
            {/* <label>{targetLabel}</label> */}
            <input
              placeholder={targetLabel}
              value={savedApp.domain || defaultApp.domain}
              type={targetType}
              onChange={(e) => onTargetChange(e.target.value)}
              data-state={errors.target ? "error" : "save"}
              onBlur={onVerifyInputs}
              min={min}
              step={step}
              onInput={onInput}
            />
            {errors.target && (
              <span className={css.errorText}>{errors.target}</span>
            )}
          </div>
          <div className={css.inputBox}>
            {/* <label>{sizeLabel}</label> */}
            <Select
              defaultValue={savedApp.size || defaultApp.size}
              onChange={onSizeChange}
              values={defaultSizeOptions}
              index={index}
            ></Select>
            {errors.size && (
              <span className={css.errorText}>{errors.size}</span>
            )}
          </div>
          <AnimatedTrashButton disabled={isFirst} onClick={onRemove} />
        </div>
      </div>
    </motion.div>
  );
};
