import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../Dropdown";
import { AnimatePresence, motion } from "framer-motion";
import { useLocales } from "../../store/useLocales";
import { LOCALES_SWITCHER } from "../../data/i18n/i18n";
import css from "./localeswitcher.module.scss";

export const LocaleSwitcher = ({ className = "" }) => {
  const { switchLanguage } = useLocales();
  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger className={css.noOutline}>
          <img
            src="/images/world.svg"
            alt="World icon"
            width={24}
            height={24}
            className={css.worldIcon}
          />
        </DropdownMenuTrigger>
        <AnimatePresence>
          <DropdownMenuContent
            asChild
            sideOffset={12}
            className={css.dropdownMenuContent}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {LOCALES_SWITCHER.map((locale, i) => (
                <DropdownMenuItem
                  key={`${locale.value}`}
                  className={css.dropdownMenuItem}
                  onSelect={() => switchLanguage(locale.value)}
                >
                  {locale.label}
                </DropdownMenuItem>
              ))}
            </motion.div>
          </DropdownMenuContent>
        </AnimatePresence>
      </DropdownMenu>
    </div>
  );
};
