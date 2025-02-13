export const DEFAULT_FORM_DATA = {
  name: "",
  companyRol: "",
  email: "",
  phone: "",
  companyWebsite: "",
  companySize: "",
  country: "",
};

const getEmailTemplate = (formData) => `
Hello Team,

A new contact form submission has been received from a potential client/partner. Here are their details:

- Full Name: ${formData.get("name")}
- Role in Company: ${formData.get("companyRol")}
- Work Email: ${formData.get("email")}
- Phone Number: ${formData.get("phone")}
- Company Website: ${formData.get("companyWebsite")}
- Company Size: ${formData.get("companySize")}
- Country: ${formData.get("country")}

Please reach out to this contact as soon as possible.

Best regards,  
Your Website Partner Form
`;

export const dispatch = async (formData) => {
  const sendData = {
    email: formData.get("email"),
    message: getEmailTemplate(formData),
  };
  const res = await fetch("https://formspree.io/f/mblrvnqr", {
    body: JSON.stringify(sendData),
    headers: { Accept: "application/json" },
    method: "POST",
  });
  return res.ok;
};

export const validateForm = (formData) => {
  const fields = [
    "name",
    "companyRol",
    "email",
    "phone",
    "companyWebsite",
    "companySize",
    "country",
  ];
  for (let field of fields) {
    if (!formData.get(field).trim()) {
      return false;
    }
  }
  return true;
};
