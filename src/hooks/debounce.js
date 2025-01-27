export const debounce = (fn, timeout) => {
    let handle = 0;
    let lastArgs= null;
    const ret = (...args) => {
      lastArgs = args;
      clearTimeout(handle);
      handle = window.setTimeout(() => {
        lastArgs = null;
        fn(...args);
      }, timeout);
    };
    ret.flush = () => {
      clearTimeout(handle);
      if (lastArgs) {
        const _lastArgs = lastArgs;
        lastArgs = null;
        fn(..._lastArgs);
      }
    };
    ret.cancel = () => {
      lastArgs = null;
      clearTimeout(handle);
    };
    return ret;
  };
  