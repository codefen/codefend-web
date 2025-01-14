import { DEFAULT_CLOUD_APP } from "./cloud";
import { DEFAULT_IP_EXTERNAL_APP } from "./externalIp";
import { DEFAULT_IP_INTERNAL_APP } from "./ipInternals";
import { DEFAULT_MOBILE_APP } from "./mobile";
import { DEFAULT_SOCIAL_APP } from "./social";
import { DEFAULT_SOURCE_APP } from "./sourceCode";
import { DEFAULT_WEB_APP } from "./web";

export const initialQuotes = {
  web: [DEFAULT_WEB_APP],
  mobile: [DEFAULT_MOBILE_APP],
  cloud: [DEFAULT_CLOUD_APP],
  externalIp: [DEFAULT_IP_EXTERNAL_APP],
  internalIp: [DEFAULT_IP_INTERNAL_APP],
  socialEngine: [DEFAULT_SOCIAL_APP],
  sourceCode: [DEFAULT_SOURCE_APP],
};

export const defaultIdentifier = {
  id: 1,
  email: "",
};
