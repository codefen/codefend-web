import { useCallback, useState } from "react";
import { DEFAULT_FORM_DATA } from "../data/contact/contact";

export const useContactForm = () => {
    const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
    const [statusMessage, setStatusMessage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleInputChange = useCallback((e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    }, []);
  
    const onChangeSelect = useCallback((value, key) => {
      setFormData(prev => ({ ...prev, [key]: value }));
    }, []);
  
    const submitForm = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      try {
        const params = new URLSearchParams({
          ...formData,
          reseller_name: "Codefend",
          reseller_id: "77",
          phase: "1",
        });
  
        const response = await fetch(
          `https://kundalini.codefend.com/kundalini/index.php?model=users%2Fnew&${params}`,
          { method: "POST" }
        );
        
        const data = await response.json();
        
        setStatusMessage({
          type: data.success ? "success" : "error",
          message: data.success 
            ? "Form submitted successfully!" 
            : "Submission failed. Please try again.",
        });
  
        if (data.success) {
          setFormData(DEFAULT_FORM_DATA);
        }
      } catch (error) {
        setStatusMessage({
          type: "error",
          message: "An error occurred. Please try again.",
        });
      } finally {
        setIsSubmitting(false);
      }
    };
  
    return {
      formData,
      statusMessage,
      isSubmitting,
      handleInputChange,
      onChangeSelect,
      submitForm,
    };
  };