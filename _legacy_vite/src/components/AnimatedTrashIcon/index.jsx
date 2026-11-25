import { motion } from "framer-motion";

export const AnimatedTrashIcon = ({ isHovered }) => {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ overflow: "visible" }}
    >
      <motion.g
        initial={false}
        animate={{
          rotate: isHovered ? 35 : 0,
          y: isHovered ? -3 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        style={{ originX: 0.5, originY: 1 }}
      >
        <path d="M19 6H5" />
        <path d="M14 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </motion.g>
      <motion.path
        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        style={{ originX: 0.5, originY: 0 }}
      />
      <motion.g
        initial={false}
        animate={{
          y: isHovered ? 0.5 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          delay: 0.1,
        }}
      >
        {[10, 14].map((x, i) => (
          <motion.path
            key={`${i}-${x}`}
            d={`M${x} 11v6`}
            initial={false}
            animate={{
              scaleY: isHovered ? 0.95 : 1,
              opacity: isHovered ? 0.6 : 1,
            }}
            transition={{
              duration: 0.2,
              delay: i * 0.05,
            }}
            style={{ originY: 0 }}
          />
        ))}
      </motion.g>
    </motion.svg>
  );
};
