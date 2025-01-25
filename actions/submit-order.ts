"use server";

// Simulate API call
export async function submitOrder(data: object) {
  console.log("server", data);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return 200;
}
