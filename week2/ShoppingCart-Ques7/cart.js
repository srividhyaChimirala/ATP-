import { getProductById, checkStock } from './product.js';

let cartItems = [];

/* 
1. Get product details
2. Check stock availability
3. Check if product already in cart
    - If yes, update quantity
    - If no, add new item
4. Return success/error message
*/

export function addToCart(productId, quantity) {
  const product = getProductById(productId);

  if (!product) {
    return "Product not found";
  }

  if (!checkStock(productId, quantity)) {
    return "Not enough stock";
  }

  const existingItem = cartItems.find(item => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cartItems.push({ productId, quantity });
  }

  return `Added ${quantity} x ${product.name} to cart`;
}

export function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.productId !== productId);
  return `Removed product ${productId} from cart`;
}

export function updateQuantity(productId, newQuantity) {
  const item = cartItems.find(i => i.productId === productId);

  if (!item) {
    return "Item not in cart";
  }

  if (!checkStock(productId, newQuantity)) {
    return "Not enough stock";
  }

  item.quantity = newQuantity;
  return `Updated product ${productId} quantity to ${newQuantity}`;
}

export function getCartItems() {
  return cartItems.map(item => {
    const product = getProductById(item.productId);
    return {
      ...product,
      quantity: item.quantity,
      subtotal: product.price * item.quantity
    };
  });
}

export function getCartTotal() {
  return getCartItems().reduce((sum, item) => sum + item.subtotal, 0);
}

export function clearCart() {
  cartItems = [];
  return "Cart cleared";
}