import { useEffect, useState } from "react";

/**
 * To trigger animations after a set amount of time
 */
export function useIdleAnimation(shouldAnimate: boolean) {
  const [animate, setAnimate] = useState<boolean>(false);
  const idleTime = 20_000;

  useEffect(() => {
    let id = null;

    if (shouldAnimate) {
      id = setTimeout(() => {
        setAnimate(true);
      }, idleTime);
    }

    return () => {
      if (id !== null) {
        clearTimeout(id);
        setAnimate(false);
      }
    };
  }, [shouldAnimate]);

  return animate;
}
