import * as SelectPrimitive from "@radix-ui/react-Select";
import css from "./select.module.scss";
import { AnimatePresence, motion } from "framer-motion";

export const Select = ({ onChange, values, defaultValue, index }) => {
  return (
    <SelectPrimitive.Root
      value={defaultValue}
      onValueChange={(value) => onChange(value)}
      name={`size-${index}`}
    >
      <SelectPrimitive.Trigger className={css.selectTrigger}>
        <SelectPrimitive.Value />
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <AnimatePresence>
          <SelectPrimitive.Content
            position="popper"
            sideOffset={7}
            className={css.selectContent}
            asChild
          >
            <motion.div
              initial={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: -12 }}
              transition={{ duration: 0.3 }}
            >
              <SelectPrimitive.Viewport>
                {values.map((value) => (
                  <SelectPrimitive.Item
                    key={value.value}
                    className={css.selectItem}
                    value={value.value}
                    disabled={value.disabled}
                  >
                    <SelectPrimitive.ItemText>
                      {value.label}
                    </SelectPrimitive.ItemText>
                  </SelectPrimitive.Item>
                ))}
              </SelectPrimitive.Viewport>
            </motion.div>
          </SelectPrimitive.Content>
        </AnimatePresence>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};
