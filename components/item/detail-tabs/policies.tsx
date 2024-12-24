import { Shield, Truck } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export default function Policies() {
  return (
    <div className="flex flex-col gap-2">
      <Card>
        <CardContent className="flex items-center gap-4 p-4">
          <Truck className="text-blue-600" />
          <div>
            <h3 className="font-semibold">Free Shipping</h3>
            <p className="text-sm text-gray-600">On orders over $50</p>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex items-center gap-4 p-4">
          <Shield className="text-blue-600" />
          <div>
            <h3 className="font-semibold">Satisfaction Guaranteed</h3>
            <p className="text-sm text-gray-600">30-day return policy</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
