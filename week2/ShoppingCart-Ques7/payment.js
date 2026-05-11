import { getCartItems, getCartTotal, clearCart } from "./cart.js";
import { applyDiscount } from "./discount.js";

// Generate simple order ID
function generateOrderId() {
  return "ORD" + Date.now();
}


// Validate payment method
export function validatePaymentMethod(method) {
  const validMethods = ["card", "upi", "cod"];
  return validMethods.includes(method);
}



// Process payment
export function processPayment(paymentMethod, couponCode = null) {
  const items = getCartItems();
  const subtotal = getCartTotal();

  if (items.length === 0) {
    return { status: "failed", message: "Cart is empty" };
  }

  if (!validatePaymentMethod(paymentMethod)) {
    return { status: "failed", message: "Invalid payment method" };
  }

  let discountDetails = { finalTotal: subtotal, discount: 0 };
  if (couponCode) {
    discountDetails = applyDiscount(subtotal, couponCode, items);
  }

  // Clear cart after payment
  clearCart();

  return {
    orderId: generateOrderId(),
    items,
    subtotal,
    discount: discountDetails.discount,
    total: discountDetails.finalTotal,
    paymentMethod,
    status: "success",
    message: "Payment successful"
  };
}