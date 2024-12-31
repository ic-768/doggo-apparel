import { use } from "react";

import { FiltersContext, FiltersContextType } from "./filters";

export const useFilters = (): FiltersContextType => {
  const context = use(FiltersContext);

  if (!context) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }

  // ! Can guard agains hydration errors using isClient if needed
  return context;
};
