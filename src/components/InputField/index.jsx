export const InputField = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required = true,
  className = "input-group",
}) => (
  <div className={className}>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);
