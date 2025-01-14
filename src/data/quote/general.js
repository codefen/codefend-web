import { DEFAULT_CLOUD_APP, DEFAULT_CLOUD_PROVIDERS, TAB_CLOUD_ID } from "./cloud";
import { DEFAULT_IP_EXTERNAL_APP, IP_EXTERNAL_PRICING, IP_EXTERNAL_SIZE_OPTIONS, TAB_EXTERNAL_IP_ID } from "./externalIp";
import { DEFAULT_IP_INTERNAL_APP, IP_INTERNAL_PRICING, IP_INTERNAL_SIZE_OPTIONS, TAB_INTERNAL_IP_ID } from "./ipInternals";
import { DEFAULT_MOBILE_APP, TAB_MOBILE_ID } from "./mobile";
import { DEFAULT_SOCIAL_APP, SOCIAL_SIZE_OPTIONS, SOCIAL_SIZE_PRICING, TAB_SOCIAL_ID } from "./social";
import { DEFAULT_SOURCE_APP, TAB_SOURCE_ID } from "./sourceCode";
import { DEFAULT_WEB_APP, sizeOptions, TAB_WEB_ID, WEB_SIZE_PRICING } from "./web";

/* 
*******************************************
*************   CONSTANTES  ***************   
*******************************************
*/
export const RESOURCE_CONFIGS = {
  web: {
    defaultSize: DEFAULT_WEB_APP.size,
    pricing: WEB_SIZE_PRICING
  },
  mobile: {
    defaultSize: DEFAULT_MOBILE_APP.size,
    pricing: WEB_SIZE_PRICING
  },
  cloud: {
    defaultSize: DEFAULT_CLOUD_APP.size,
    pricing: WEB_SIZE_PRICING
  },
  sourceCode: {
    defaultSize: DEFAULT_SOURCE_APP.size,
    pricing: WEB_SIZE_PRICING
  },
  socialEngine: {
    defaultSize: DEFAULT_SOCIAL_APP.size,
    pricing: SOCIAL_SIZE_PRICING,
    sizeOptions: SOCIAL_SIZE_OPTIONS
  },
  internalIp: {
    defaultSize: DEFAULT_IP_INTERNAL_APP.size,
    pricing: IP_INTERNAL_PRICING,
    sizeOptions: IP_INTERNAL_SIZE_OPTIONS
  },
  externalIp: {
    defaultSize: DEFAULT_IP_EXTERNAL_APP.size,
    pricing: IP_EXTERNAL_PRICING,
    sizeOptions: IP_EXTERNAL_SIZE_OPTIONS
  }
};

export const tabs = [
  { icon: "/resources/web.svg", label: "Web", id: TAB_WEB_ID },
  { icon: "/resources/mobile.svg", label: "Mobile", id: TAB_MOBILE_ID },
  { icon: "/resources/cloud.svg", label: "Cloud", id: TAB_CLOUD_ID },
  { icon: "/resources/network.svg", label: "External IP", id: TAB_EXTERNAL_IP_ID },
  { icon: "/resources/network.svg", label: "Internal IP", id: TAB_INTERNAL_IP_ID },
  { icon: "/resources/sourcecode.svg", label: "Source Code", id: TAB_SOURCE_ID },
  { icon: "/resources/social.svg", label: "Social", id: TAB_SOCIAL_ID },
];

const validators = {
  web: {
    domain: (value) => !value?.trim() || !isValidURL(value) ? "Invalid domain" : undefined,
  },
  mobile: {
    url: (value) => !value?.trim() || !isValidURL(value) ? "Invalid store url" : undefined,
  },
  cloud: {
    provider: (value) => !value || !value?.trim() || value?.length > 150 ? "Invalid provider name" : undefined, 
  },
  sourceCode: {
    repo: (value) => !value?.trim() || !isValidURL(value) ? "Invalid repository url" : undefined,
  },
  socialEngine: {
    number: (value) => !value || value <= 0 ? "Invalid number" : undefined,
  },
  internalIp: {
    internalIpAmount: (value) => !value || value <= 0 ? "Invalid number" : undefined,
  },
  externalIp: {
    externalIpAmount: (value) => !value || value <= 0 ? "Invalid number" : undefined,
  }
};

const validationFields = {
  web: ["domain"],
  mobile: ["url"],
  cloud: ["provider"],
  sourceCode: ["repo"],
  socialEngine: ["number"],
  internalIp: ["internalIpAmount"],
  externalIp: ["externalIpAmount"]
};

/* 
*******************************************
*************   FUNCIONES   ***************   
*******************************************
*/

export const applyValidator = (value, validator) => {
  try {
    return validator(value);
  } catch (error) {
    console.error(`Validation error: ${error}`);
    return "Validation error";
  }
};

export function isValidURL(url) {
  const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})([\/\w .-]*)*\/?$/i;
  return urlPattern.test(url);
}

export const validateSize = (size, sizeOptions) => {
  if (!size || !sizeOptions.some((option) => option.value === size)) {
    return "Invalid size";
  }
  return undefined;
};

export const validateQuote = (type, quote) => {
  if (!validators[type]) {
    console.warn(`No validators configured for type: ${type}`);
    return quote;
  }

  const selectedSizeOption = RESOURCE_CONFIGS[type]?.sizeOptions || sizeOptions;
  return quote.map(item => {
    const validatedItem = { ...item };
    // Validación común del size para todos los tipos
    const sizeError = validateSize(item.size, selectedSizeOption);
    if (sizeError) {
      validatedItem.sizeError = sizeError;
    } else {
      validatedItem.sizeError = undefined;
    }

    // Validaciones específicas por tipo
    const typeValidators = validators[type];
    const fieldsToValidate = validationFields[type] || [];

    fieldsToValidate.forEach(field => {
      if (typeValidators[field]) {
        const error = applyValidator(item[field], typeValidators[field]);
        const errorKey = `${field}Error`;
        if (error) {
          validatedItem[errorKey] = error;
        } else {
          validatedItem[errorKey] = undefined;
        }
      }
    });

    return validatedItem;
  });
};

export const validateSingleQuote = (type, quote, index) => {
  // Validar que el índice sea válido
  if (index < 0 || !Array.isArray(quote) || index >= quote.length) {
    throw new Error('Invalid index');
  }
  console.log({ type, vali:validators[type] })
  // Si el tipo no está configurado, devolver la quote sin validar
  if (!validators[type]) {
    console.warn(`No validators configured for type: ${type}`);
    return quote;
  }

  // Crear una copia del array original
  const updatedQuote = [...quote];
  const itemToValidate = { ...updatedQuote[index] };
  const selectedSizeOption = RESOURCE_CONFIGS[type]?.sizeOptions || sizeOptions;
  // Validación común del size
  const sizeError = validateSize(itemToValidate.size, selectedSizeOption);
  if (sizeError) {
    itemToValidate.sizeError = sizeError;
  } else {
    itemToValidate.sizeError = undefined;
  }

  // Validaciones específicas por tipo
  const typeValidators = validators[type];
  const fieldsToValidate = validationFields[type] || [];

  fieldsToValidate.forEach(field => {
    if (typeValidators[field]) {
      const error = applyValidator(itemToValidate[field], typeValidators[field]);
      const errorKey = `${field}Error`;
      if (error) {
        itemToValidate[errorKey] = error;
      } else {
        itemToValidate[errorKey] = undefined;
      }
    }
  });

  // Actualizar el elemento en el array
  updatedQuote[index] = itemToValidate;
  return updatedQuote;
};

export function getTypeErrors(type) {
  if(type === "web"){
    return "domainError";
  } else if(type === "mobile"){
    return "urlError";
  } else if(type === "cloud"){
    return "providerError";
  } else if(type === "sourceCode"){
    return "repoError";
  }
  return "";
}

export const calculateResourceList = (resourceType, resourceQuotes) => {
  const config = RESOURCE_CONFIGS[resourceType];
  return resourceQuotes.filter(
    (app) => app.size !== "" && app.size !== config.defaultSize
  );
};

export const calculateTotalPrice = (resources, DEFAULT, resourceType) => {
  return resources.reduce((total, resource) => {
    const size = resource.size.toLowerCase();
    let price = DEFAULT[size] || 0;
    if("socialEngine" === resourceType){
      price *= resource.number;
    } else if("externalIp" === resourceType){
      price *= resource.externalIpAmount;
    } else if("internalIp" === resourceType){
      price *= resource.internalIpAmount;
    }
    return total + price;
  }, 0);
};


export const getTitle = (type) => {
  switch (type) {
    case "web":
      return "Web Application";
    case "mobile":
      return "Mobile Application";
    case "cloud":
      //return "Cloud Security Posture Management";
      return "Cloud Provider";
    case "sourceCode":
      return "Source Code Review";
    case "socialEngine":
      return "Social";
    case "internalIp":
      return "Internal IP Security";
    case "externalIp":
      return "External IP Security";
    default:
      return "";
  }
};

export const sendMetrics = (identifier, quotes)=>{
  const CLEAN_QUOTE = Object.entries(quotes).reduce((acc, [resourceType, items]) => {
    const resourceConfig = RESOURCE_CONFIGS[resourceType];
    if (!resourceConfig || !resourceConfig.pricing) {
      console.warn(`No pricing configuration found for resource type: ${resourceType}`);
      return acc;
    }
    const processedItems = items.map(item => {
      let price = resourceConfig.pricing[item.size] || 0;
      if(resourceType === "externalIp") price *= item.externalIpAmount;
      if(resourceType === "internalIp") price *= item.internalIpAmount;
      if(resourceType === "socialEngine") price *= item.number;
      return {
        ...item,
        price,
      };
    });
    return {
      ...acc,
      [resourceType]: calculateResourceList(resourceType, processedItems),
    };
  }, {});
  const TOTAL_PRICE = Object.values(CLEAN_QUOTE).reduce((total, items) => {
    return total + items.reduce((sum, item) => sum + (item.price || 0), 0);
  }, 0);
  const JSON_METRIC = JSON.stringify(CLEAN_QUOTE);
  const formData = new FormData();
  formData.append("reckon", JSON_METRIC);
  formData.append("uid", identifier.id);
  formData.append("model", "reckoner");
  if(identifier.email) formData.append("email", identifier.email);
  if(identifier.phone) formData.append("phone", identifier.phone);
  formData.append("price", TOTAL_PRICE);

  fetch(`https://api.codefend.com/kundalini/index.php`, {
    method: "POST",
    body: formData,
  });
}