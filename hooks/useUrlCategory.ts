import { useCallback, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

/**
 * Initialise with category from url.
 * Setting category updates url.
 */
export function useUrlCategory() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [categoryName, setCategoryName] = useState(initialCategory);
  const router = useRouter();

  const updateCategoryName = useCallback(
    (newCategory: string) => {
      setCategoryName(newCategory);
      router.replace(`?category=${newCategory}`, { scroll: false });
    },
    [router, setCategoryName],
  );

  return [categoryName, updateCategoryName] as const;
}
