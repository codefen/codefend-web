import { useEffect, useRef } from "react";
import { useConfetti } from "../../hooks/useConfeti";
import { useQuoteStore } from "../../store/useQuoteStore";

export const Confeti = () => {
  const canvasRef = useRef();
  const isGeneratingRef = useRef(true);
  const { showConfetti, toggleCoffeti } = useQuoteStore();

  useEffect(() => {
    if (!showConfetti) return;
    const timout = setTimeout(() => (isGeneratingRef.current = false), 15000);
    return () => clearTimeout(timout);
  }, [showConfetti]);

  useConfetti(showConfetti, canvasRef, isGeneratingRef, () => {
    toggleCoffeti(false);
  });

  if (showConfetti) {
    return (
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          width: "100dvw",
          height: "100dvh",
          touchAction: "none",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
    );
  } else {
    return null;
  }
};
