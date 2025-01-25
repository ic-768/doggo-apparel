import { useQuery } from "@tanstack/react-query";

import { useShoppingCart } from "@/context/cart/use-shopping-cart";
import { fetchItems } from "@/lib/fetch";

export function useCartDetails() {
  const { cart } = useShoppingCart();

  const { data: items = [], isFetching: isFetchingCartDetails } = useQuery({
    queryKey: ["cart"],
    queryFn: () => {
      const ids = cart!.map((item) => item.id);
      return fetchItems(ids);
    },
    enabled: !!cart?.length,
  });

  // combine cart data (size, quantity) with full item data
  const enrichedItems = cart?.map((item) => {
    return {
      ...item,
      ...items.find((i) => i.id === item.id)!,
    };
  });

  const subtotal =
    enrichedItems?.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    ) || 0;
  const shipping = subtotal > 50 ? 0 : 5;
  const total = subtotal + shipping;

  return {
    cart,
    items: enrichedItems,
    subtotal,
    total,
    shipping,
    isFetchingCartDetails,
  };
}
