"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Lock } from "lucide-react";

import { submitOrder } from "@/actions/submit-order";
import OrderSummary from "@/components/cart/order-summary";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader } from "@/components/ui/loader";
import Main from "@/components/ui/main";
import { useCartDetails } from "@/hooks/useCartDetails";

type CheckoutFormData = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  paymentMethod: string;
};

export default function CheckoutPage() {
  const { cart, subtotal, items, shipping, total, isFetchingCartDetails } =
    useCartDetails();

  const [isProcessing, setIsProcessing] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>();

  const onSubmit = async (data: CheckoutFormData) => {
    setIsProcessing(true);
    await submitOrder(data);
    setIsProcessing(false);
  };

  if (cart === null || !items || isFetchingCartDetails)
    return (
      <Main className="justify-center">
        <Loader />
      </Main>
    );

  return (
    <Main>
      <div className="flex items-center gap-2">
        <Lock className="size-4 text-muted-foreground" />
        <h1 className="text-xl font-semibold">Secure Checkout</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shipping Address</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-destructive">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-destructive">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  {...register("address", { required: "Address is required" })}
                />
                {errors.address && (
                  <p className="text-sm text-destructive">
                    {errors.address.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="apartment">
                  Apartment, suite, etc. (optional)
                </Label>
                <Input id="apartment" {...register("apartment")} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    {...register("city", { required: "City is required" })}
                  />
                  {errors.city && (
                    <p className="text-sm text-destructive">
                      {errors.city.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    {...register("zipCode", {
                      required: "ZIP code is required",
                      pattern: {
                        value: /^\d{5}(-\d{4})?$/,
                        message: "Invalid ZIP code format",
                      },
                    })}
                  />
                  {errors.zipCode && (
                    <p className="text-sm text-destructive">
                      {errors.zipCode.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label>Card Number</Label>
                  <Input placeholder="1234 1234 1234 1234" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Name on Card</Label>
                  <Input placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Expiration Date</Label>
                  <Input placeholder="MM/YY" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>CVV</Label>
                  <Input placeholder="123" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Place Order"}
          </Button>
        </form>

        <OrderSummary subtotal={subtotal} shipping={shipping} total={total} />
      </div>
    </Main>
  );
}
