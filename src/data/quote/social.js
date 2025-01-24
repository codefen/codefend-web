export const TAB_SOCIAL_ID = "social-tab-trigger";

export const DEFAULT_SOCIAL_APP = {
  number: "",
  size: "--SELECT--",
};

export const SOCIAL_SIZE_OPTIONS = (label)=>[
  { value: DEFAULT_SOCIAL_APP.size, label },
  { value: "basic", label: "basic role | $10" },
  { value: "medium", label: "medium role | $50" },
  { value: "advanced", label: "advanced role | $100" },
  { value: "special", label: "special role | $1,500" },
];

export const SOCIAL_SIZE_PRICING = {
    basic: 10,
    medium: 50,
    advanced: 100,
    special: 1500
};

export const SOCIAL_DESCRIPTION = [
  {
    title: "pentest basic role", 
    price: "$10"
  },
  {
    title: "pentest medium role", 
    price: "$50"
  },
  {
    title: "pentest advanced role", 
    price: "$100"
  },
  {
    title: "pentest special role", 
    price: "$1500"
  },
]


export const checkValue = (number) => {
  const value = parseInt(number, 10);
  return value <= 0 ? 1 : value;
};