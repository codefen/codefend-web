import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedTrashIcon } from "../AnimatedTrashIcon";
import css from "./animatedTrashButton.module.scss";

export const AnimatedTrashButton = ({ onClick, disabled }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`commonButton ${css.trashButton}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileTap="tap"
      aria-label="Remove web application"
      style={{
        visibility: disabled ? "hidden" : "visible",
        pointerEvents: disabled ? "none" : "visible",
        opacity: disabled ? 0 : 1,
      }}
    >
      <motion.div
        className={css.trashButtonWrapper}
        style={{ "--container-color": "#e4e4e4" }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 0.95 : 1,
        }}
        transition={{
          duration: 0.2,
        }}
      />
      <motion.div
        className={css.trashButtonWrapper}
        style={{ "--container-color": "#e4e4e4" }}
        initial={{ scale: 1, opacity: 0 }}
        animate={{
          scale: isHovered ? 0.9 : 1,
          opacity: isHovered ? 0.5 : 0,
        }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
      />

      <motion.div
        className={css.trashButtonContainer}
        animate={{
          scale: isHovered ? 0.9 : 1,
          color: isHovered ? "rgb(220, 38, 38)" : "rgb(239, 68, 68)",
        }}
        whileTap={{ scale: 0.85 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        <AnimatedTrashIcon isHovered={isHovered} />
      </motion.div>
    </motion.button>
  );
};
