export const DEFAULT_ROLE = { label: "Select Role", value: "-", disabled: true };
export const DEFAULT_COMPANY_SIZE = { label: "Select Company Size", value: "-", disabled: true };
export const rolesOptions = [
DEFAULT_ROLE,
  { label: "Administrative", value: "admin" },
  { label: "Human Resources", value: "human" },
  { label: "Information Technology", value: "info" },
  { label: "Marketing", value: "ads" },
  { label: "Sales", value: "sales" },
  { label: "Finance", value: "finance" },
  { label: "Customer Service", value: "cs" },
  { label: "Production & Ops", value: "prod" },
  { label: "Strategy & Planning", value: "plan" },
  { label: "Legal Affairs", value: "law" },
];

export const DEFAULT_FORM_DATA = {
  lead_fname: "",
  lead_lname: "",
  lead_role: DEFAULT_ROLE.value,
  lead_email: "",
  lead_phone: "",
  company_name: "",
  company_web: "",
  company_size: DEFAULT_COMPANY_SIZE.value,
  company_area: "",
};

export const companySizeOptions = [
    DEFAULT_COMPANY_SIZE,
  { label: "1-10", value: "1-10" },
  { label: "11-50", value: "11-50" },
  { label: "51-200", value: "51-200" },
  { label: "201-500", value: "201-500" },
  { label: ">500", value: ">500" },
];

export  const routesMap = {
    "/": 3300,
    "/home": 3300,
    "/software": 3700,
    "/industries": 2700,
    "/services": 4700,
    "/compliance": 1700,
    "/partners": 1000,
    "/about-us": 2000,
  };