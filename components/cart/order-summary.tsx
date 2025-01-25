import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface OrderSummaryProps {
  subtotal: number;
  total: number;
  shipping: number;
  withProceed?: boolean;
}

export default function OrderSummary({
  subtotal,
  total,
  shipping,
  withProceed = false,
}: OrderSummaryProps) {
  return (
    <Card className="flex flex-col gap-4 self-start p-6">
      <h2 className="text-xl font-bold">Order Summary</h2>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            key={shipping}
          >
            ${shipping.toFixed(2)}
          </motion.span>
        </div>
        <div className="mt-2 border-t pt-2">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              key={total}
            >
              ${total.toFixed(2)}
            </motion.span>
          </div>
        </div>
      </div>
      {withProceed ? (
        <Button
          asChild
          className="self-center"
          effect="expandIcon"
          icon={ArrowRightIcon}
          iconPlacement="right"
        >
          <Link href="checkout">Proceed To Checkout</Link>
        </Button>
      ) : null}
    </Card>
  );
}
