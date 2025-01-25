"use server";

import { CheckoutFormData } from "../(shop)/checkout/page";

// Simulate API call
export async function submitOrder(data: CheckoutFormData) {
  console.log("server", data);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return 200;
}
