export const DEFAULT_ROLE = (label)=> ({ label, value: "-", disabled: true });

export const DEFAULT_COMPANY_SIZE = (label)=> ({ label, value: "-", disabled: true });

export const DEFAULT_FORM_DATA = {
  lead_fname: "",
  lead_lname: "",
  lead_role: DEFAULT_ROLE("").value,
  lead_email: "",
  lead_phone: "",
  company_name: "",
  company_web: "",
  company_size: DEFAULT_COMPANY_SIZE("").value,
  company_area: "",
};

export const companySizeOptions =  (label)=> [
    DEFAULT_COMPANY_SIZE(label),
  { label: "1-10", value: "1-10" },
  { label: "11-50", value: "11-50" },
  { label: "51-200", value: "51-200" },
  { label: "201-500", value: "201-500" },
  { label: ">500", value: ">500" },
];
export  const routesMap = (lang)=>({
  [`/${lang}`]: 3300,
  [`/${lang}/home`]: 3300,
  [`/${lang}/software`]: 3700,
  [`/${lang}/industries`]: 2700,
  [`/${lang}/compliance`]: 1700,
  [`/${lang}/partners`]: 1000,
  [`/${lang}/about-us`]: 2000,
})