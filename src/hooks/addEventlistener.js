export function addEventListener(
    target,
    type,
    listener,
    options
  ) {
    if (!target) {
      return () => {};
    }
    target?.addEventListener?.(type, listener, options);
    return () => {
      target?.removeEventListener?.(type, listener, options);
    };
  }