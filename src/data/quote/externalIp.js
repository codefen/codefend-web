export const TAB_EXTERNAL_IP_ID = "external-ip-tab-trigger";

export const DEFAULT_IP_EXTERNAL_APP = {
    externalIpAmount: "",
    size: "--SELECT--",
};

export const IP_EXTERNAL_SIZE_OPTIONS = [
    { value: DEFAULT_IP_EXTERNAL_APP.size, label: "Choose the criticality level" },
    { value: "low", label: "Low | $10" },
    { value: "moderate", label: "Moderate | $20" },
    { value: "high", label: "High | $35" },
    { value: "crucial", label: "Crucial | $100" },
  ];

  export const IP_EXTERNAL_PRICING = {
    low: 10,
    moderate: 20,
    high: 35,
    crucial: 100
};
