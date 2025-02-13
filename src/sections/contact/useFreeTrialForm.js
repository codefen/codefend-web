import { useCallback, useState } from "react";
import { DEFAULT_FORM_DATA } from "../../data/contact/contact";
import { dispatchContactForm, validateForm } from "./action";

export const useFreeTrialForm = (messages) => {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const [statusMessage, setStatusMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const onChangeSelect = useCallback((value, key) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (validateForm(data)) {
      setIsSubmitting(true);
      dispatchContactForm(data)
        .then(() => {
          setStatusMessage({
            type: "success",
            message: messages.successMessage,
          });

          if (data.success) {
            setFormData(DEFAULT_FORM_DATA);
          }
        })
        .catch(() => {
          setStatusMessage({
            type: "error",
            message: messages.errorMessage,
          });
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      setStatusMessage({
        type: "error",
        message: messages.required,
      });
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
