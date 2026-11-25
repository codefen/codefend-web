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

A new contact form submission has been received from a contact form in about us section. Here are their details:

- Full Name: ${formData.get("lead_fname")} ${formData.get("lead_lname")}
- Email: ${formData.get("lead_email")}
- Phone Number: ${formData.get("lead_phone")}
- Company name: ${formData.get("company_name")}
- Company Website: ${formData.get("company_web")}
- Company Size: ${formData.get("company_size")}
- Role in Company: ${formData.get("lead_role")}
- Message: ${formData.get("company_area")}

Please reach out to this contact as soon as possible.

Best regards,  
Your Website Contact Form
`;

export const dispatchContactForm = async (formData) => {
  const sendData = {
    email: formData.get("lead_email"),
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
    "lead_fname",
    "lead_lname",
    "lead_email",
    "company_name",
    "company_web",
    "company_size",
    "lead_role",
    "company_area",
  ];
  for (let field of fields) {
    if (!formData.get(field).trim()) {
      return false;
    }
  }
  return true;
};
