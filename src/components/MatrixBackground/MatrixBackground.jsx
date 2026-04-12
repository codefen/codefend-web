import { useEffect, useRef } from "react";

/**
 * MatrixBackground — canvas letter-glitch animation
 * Inspired by Strike.sh's background matrix effect.
 * Adapted to Codefend's cobalt-blue palette.
 */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$&*-_+=[]{};<>.,?/\\|~";
const CHARS_ARR = CHARS.split("");

// Color palettes
const GRAYS  = ["#091d35", "#0a2040", "#0d2444", "#0f2d52", "#112848"];
const ACCENT = ["#1a4a8a", "#1a5caa", "#2a7fe8", "#1d6fd4"];

const CHAR_W = 12;
const CHAR_H = 18;
const FONT_SIZE = 12;
const GLITCH_SPEED = 55;   // ms between glitch ticks
const ACCENT_PROB = 0.045; // ~4.5% cells get accent color

function randFrom(arr) {
  return arr[(Math.random() * arr.length) | 0];
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

function lerpColor(a, b, t) {
  const [ar, ag, ab] = hexToRgb(a);
  const [br, bg, bb] = hexToRgb(b);
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bv = Math.round(ab + (bb - ab) * t);
  return `rgb(${r},${g},${bv})`;
}

export default function MatrixBackground({ style }) {
  const canvasRef = useRef(null);
  const stateRef = useRef(null);
  const rafRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let columns = 0, rows = 0, cells = [];

    function initGrid(w, h) {
      columns = Math.max(1, Math.ceil(w / CHAR_W));
      rows    = Math.max(1, Math.ceil(h / CHAR_H));
      cells = [];
      const total = columns * rows;
      for (let i = 0; i < total; i++) {
        const isAccent = Math.random() < ACCENT_PROB;
        const pal = isAccent ? ACCENT : GRAYS;
        const col = randFrom(pal);
        cells.push({
          ch: randFrom(CHARS_ARR),
          color: col,
          fromColor: col,
          targetColor: col,
          progress: 1,
          isAccent,
        });
      }
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width  = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${FONT_SIZE}px "Courier New", monospace`;
      ctx.textBaseline = "top";
      initGrid(w, h);
    }

    function draw() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.font = `${FONT_SIZE}px "Courier New", monospace`;
      ctx.textBaseline = "top";
      for (let i = 0; i < cells.length; i++) {
        const c = cells[i];
        const x = (i % columns) * CHAR_W;
        const y = Math.floor(i / columns) * CHAR_H;
        ctx.fillStyle = c.color;
        ctx.fillText(c.ch, x, y);
      }
    }

    function glitchStep() {
      // Update ~5% of cells per tick
      const count = Math.max(1, Math.floor(cells.length * 0.05));
      for (let i = 0; i < count; i++) {
        const idx = (Math.random() * cells.length) | 0;
        const c = cells[idx];
        c.ch = randFrom(CHARS_ARR);
        const pal = c.isAccent ? ACCENT : GRAYS;
        const next = randFrom(pal);
        c.fromColor = c.color;
        c.targetColor = next;
        c.progress = 0;
      }
    }

    function smoothStep() {
      let needDraw = false;
      for (let i = 0; i < cells.length; i++) {
        const c = cells[i];
        if (c.progress < 1) {
          c.progress = Math.min(1, c.progress + 0.07);
          c.color = lerpColor(c.fromColor, c.targetColor, c.progress);
          needDraw = true;
        }
      }
      return needDraw;
    }

    let lastGlitch = performance.now();

    function animate(now) {
      if (now - lastGlitch >= GLITCH_SPEED) {
        glitchStep();
        draw();
        lastGlitch = now;
      } else if (smoothStep()) {
        draw();
      }
      rafRef.current = requestAnimationFrame(animate);
    }

    resize();
    draw();
    rafRef.current = requestAnimationFrame(animate);

    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}
