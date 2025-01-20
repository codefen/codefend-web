import { useEffect } from "react";
import { useQuoteStore } from "../../store/useQuoteStore";
import ModalWrapper from "../ModalWrapper";
import { motion } from "framer-motion";
import css from "./proposalsentsuccess.module.scss";

const PATH_VARIABLES = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

export const ProposalSentSuccessModal = () => {
  const { toggleSuccess, showSuccess } = useQuoteStore();

  useEffect(() => {
    if (!showSuccess) return;
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    let source;

    // Cargar y reproducir el archivo MP3
    const playSound = async () => {
      try {
        const response = await fetch("/success.mp3");
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

        source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.start();

        // Detener el contexto de audio después de la reproducción
        source.onended = () => audioContext.close();
      } catch (error) {
        console.error("Error al reproducir el sonido:", error);
      }
    };

    playSound().catch((error) =>
      console.error("Error al reproducir el sonido:", error)
    );
    const timeout = setTimeout(() => toggleSuccess(false), 4000);
    return () => {
      if (source) {
        source.stop();
        source.disconnect();
      }
      audioContext.close();
      clearTimeout(timeout);
    };
  }, [showSuccess]);

  if (!showSuccess) return null;
  return (
    <ModalWrapper showCloseBtn action={() => toggleSuccess(false)}>
      <div className={css.modalContainerContent}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={css.checkMark}
        >
          <motion.path
            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
            variants={PATH_VARIABLES}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M22 4L12 14.01l-3-3"
            variants={PATH_VARIABLES}
            initial="hidden"
            animate="visible"
          />
        </motion.svg>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={css.title}
        >
          Your request has been sent
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className={css.text}
        >
          You will receive a response from our team soon.
        </motion.p>
      </div>
    </ModalWrapper>
  );
};
