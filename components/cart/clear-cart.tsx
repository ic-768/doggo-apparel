import { useShoppingCart } from "@/context/cart/use-shopping-cart";

import { Button } from "../ui/button";
import Confirmation from "../ui/confirmation";

export default function ClearCart() {
  const { clearCart } = useShoppingCart();

  return (
    <Confirmation
      onClick={clearCart}
      title="Are you absolutely sure?"
      description="Once you clear your cart, you'll have to re-select your items."
      triggerComponent={
        <Button variant="destructive" className="self-end">
          Clear Cart
        </Button>
      }
    />
  );
}
