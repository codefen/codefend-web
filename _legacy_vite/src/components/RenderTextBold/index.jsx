export function RenderTextBold({ text }) {
  return (
    <p>
      {text.map((part, index) =>
        part.bold ? <b key={index}>{part.text}</b> : part.text
      )}
    </p>
  );
}
