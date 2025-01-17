import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";


export const useScrolLToRef = (ref) => {
    const location = useLocation();

    const scrollToRef = useCallback(() => {
        if (location.state?.scrollToContact) {
            const section = ref.current;
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
    useEffect(() => {
        scrollToRef();
    }, [location]);
};