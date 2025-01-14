
export const TAB_WEB_ID = "web-tab-trigger";

export const DEFAULT_WEB_APP = {
    domain: "",
    size: "--SELECT--",
  };
  
export const sizeOptions = [
    { value: DEFAULT_WEB_APP.size, label: "System Size" },
    { value: "small", label: "small | $1,500" },
    { value: "medium", label: "medium | $4,500" },
    { value: "full", label: "full | $10,000" },
    /* { value: "included", label: "included | $0" }, */
  ];

export const WEB_SIZE_PRICING = {
    small: 1500,
    medium: 4500,
    full: 13500,
};

export const WEB_DESCRIPTION = [
  {
    title: "pentest web application small", 
    price: "$1,500"
  },
  {
    title: "pentest web application medium", 
    price: "$4,500"
  },
  {
    title: "pentest web application full", 
    price: "$13,500"
  }
]