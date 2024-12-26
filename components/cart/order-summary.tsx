import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface OrderSummaryProps {
  subtotal: number;
  total: number;
  shipping: number;
}

export default function OrderSummary({
  subtotal,
  total,
  shipping,
}: OrderSummaryProps) {
  return (
    <Card className="flex flex-col gap-4 p-6">
      <h2 className="text-xl font-bold">Order Summary</h2>
      <div className="mb-4 space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span>${shipping.toFixed(2)}</span>
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
      <Button
        className="self-center"
        effect="expandIcon"
        icon={ArrowRightIcon}
        iconPlacement="right"
      >
        Proceed To Checkout
      </Button>
    </Card>
  );
}
