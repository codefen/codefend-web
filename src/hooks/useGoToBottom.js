import { useEffect } from "react";


export const usGoToBottom = (ref, dependencies = []) => {
    useEffect(() => {
      if (ref?.current) {
        ref.current.scrollTop = ref.current.scrollHeight;
      }
    }, dependencies);
}