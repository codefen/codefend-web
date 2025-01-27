import { useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "../CloseIcon";
import css from "./modal.module.scss";
import { addEventListener } from "../../hooks/addEventlistener";
import { AnimatePresence } from "framer-motion";

const root = document.getElementById("root-modal");

const ModalWrapper = ({
  isErrorBox = false,
  type,
  children,
  action,
  showCloseBtn,
  className = "",
}) => {
  const closeEvent = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    action && action();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeEvent();
      }
    };
    const unsub = addEventListener(window, "keydown", handleKeyDown);

    return unsub;
  }, [action]);

  if (!root) {
    console.error("Modal root element not found");
    return null;
  }

  return createPortal(
    <div
      onDoubleClick={closeEvent}
      className={`${css.modalWrapper} ${className}`}
      role="dialog"
      aria-modal="true"
    >
      <AnimatePresence>
        <article
          className={`${css.modal} ${!isErrorBox ? type : ""}`}
          onDoubleClick={(e) => {
            e.nativeEvent.stopImmediatePropagation();
            e.stopPropagation();
          }}
        >
          {Boolean(showCloseBtn) && (
            <span className={css.modalCloseBtn} onClick={closeEvent}>
              <CloseIcon isButton />
            </span>
          )}
          {children}
        </article>
      </AnimatePresence>
    </div>,
    root
  );
};

export default ModalWrapper;
