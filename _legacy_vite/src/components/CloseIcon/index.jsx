export const CloseIcon = ({ isButton }) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    style={{
      overflow: "visible",
      width: "1.5rem",
      height: "1.5rem",
      cursor: !isButton ? "default" : "pointer",
    }}
  >
    <path
      style={{ cursor: !isButton ? "default" : "pointer" }}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);
