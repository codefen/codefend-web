import * as SelectPrimitive from "@radix-ui/react-Select";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import css from "./select.module.scss";
import { AnimatePresence, motion } from "framer-motion";

export const Select = ({ onChange, values, defaultValue, name }) => {
  return (
    <SelectPrimitive.Root
      value={defaultValue}
      onValueChange={(value) => onChange(value)}
      name={name}
    >
      <SelectPrimitive.Trigger className={css.selectTrigger}>
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon className={css.selectIcon}>
          cerrar
        </SelectPrimitive.Icon>
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
              <ScrollArea.Root className={css.ScrollAreaRoot} type="auto">
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
                <ScrollArea.Scrollbar
                  className={css.ScrollAreaScrollbar}
                  orientation="vertical"
                >
                  <ScrollArea.Thumb className={css.ScrollAreaThumb} />
                </ScrollArea.Scrollbar>
              </ScrollArea.Root>
            </motion.div>
          </SelectPrimitive.Content>
        </AnimatePresence>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};
