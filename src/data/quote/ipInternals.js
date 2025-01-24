export const TAB_INTERNAL_IP_ID = "internal-ip-tab-trigger";

export const DEFAULT_IP_INTERNAL_APP = {
    internalIpAmount: "",
    size: "--SELECT--",
};

export const IP_INTERNAL_SIZE_OPTIONS = (label)=>[
  { value: DEFAULT_IP_INTERNAL_APP.size, label },
  { value: "low", label: "Low | $10" },
  { value: "moderate", label: "Moderate | $20" },
  { value: "high", label: "High | $35" },
  { value: "crucial", label: "Crucial | $100" },
]

  export const IP_INTERNAL_PRICING = {
    low: 10,
    moderate: 20,
    high: 35,
    crucial: 100
};
