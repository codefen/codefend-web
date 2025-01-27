export const StatusMessage = ({ message, type }) => (
  <div
    id={type === "success" ? "messageSuccess" : "messageDanger"}
    style={{ display: "block", marginTop: "1rem" }}
  >
    {message}
  </div>
);
