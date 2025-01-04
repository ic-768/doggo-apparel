import { useQueryClient } from "@tanstack/react-query";

import { useShoppingCart } from "@/context/cart/use-shopping-cart";

import { Button } from "../ui/button";
import Confirmation from "../ui/confirmation";

export default function ClearCart() {
  const { clearCart } = useShoppingCart();

  const queryClient = useQueryClient();
  const onClick = async () => {
    clearCart();
    await queryClient.setQueryData(["cart"], []);
  };

  return (
    <Confirmation
      onClick={onClick}
      title="Are you absolutely sure?"
      description="Once you clear your cart, you'll have to re-select your items."
      triggerComponent={
        <Button variant="destructive" className="ml-auto self-end">
          Clear Cart
        </Button>
      }
    />
  );
}
