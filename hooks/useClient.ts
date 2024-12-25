// I hate the fact that this even has to be a thing, but at the time of writing
// suppressHydrationWarning is just a decoration apparently
// https://github.com/vercel/next.js/issues/58493

import { useEffect, useState } from "react";

export function useClient() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => setHasMounted(true), []);

  return hasMounted;
}
