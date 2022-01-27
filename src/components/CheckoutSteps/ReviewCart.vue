<template>
  <h2>Review your cart</h2>
  <div  v-if="cart.cartItems.length">
    <ul class="cart-items">
      <li v-for="item in cart.cartItems" :key="item.id">
        <div class="cart-item">
          <img :src="item.image" :alt="item.name">
          <div class="cart-item-info">
            <div class="cart-item-header">{{ item.name }}</div>
            <div>
              <span class="cart-item-quantity">{{ item.quantity }}</span>
              <span> x </span>
              <span class="cart-item-price">${{ item.price }}</span>
            </div>
          </div>
          <div class="cart-item-total">
            <span>Total: </span>
            <span>${{ item.quantity * (+item.price) }}</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="payment-section">
      <span class="cart-total">
        Total order: <span class="cart-total-price">${{ cart.cartTotal }}</span>
      </span>
    </div>
  </div>  
  <div v-else>No item in your cart yet.</div>
  </template>
  <script>
  import { useCart } from '../../stores/useCart.js'

  export default {
  setup() {
    const cart = useCart();
    return {
      cart
    };
  },
  }
  </script>
  <style scoped>
  .cart-items {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 2rem;
  justify-content: center;
  max-width: 470px;
  margin: auto;
  font-size: 1.2rem;
  }
  .cart-item {
  display: grid;
  grid-template-columns: 100px repeat(3, 100px);
  grid-gap:1rem;
  align-items: flex-start;
  max-height: 100px;
  border-bottom:1px solid #f3f3f3;
  padding: 0.5rem;
  }

  .cart-item-header {
  font-size: 1rem;
  font-weight: 600;
  }

  .cart-item-info, .cart-item-total {
  text-align: start;
  }

  .payment-section {
  display: flex;
  align-items: center;
  justify-content: center;
  }

  .cart-total {
  text-align: center;
  font-size: 1.5rem;
  margin-right: 1rem;
  }

  .cart-total-price {
  font-weight: 600;
  }

  .cart-item-remove-btn {
  background: palevioletred;
  color: white;
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  font-weight: 600;
  padding: 0.5rem;
  }

  .cart-item-remove-btn:hover {
  background: #d5567f;
  }

  .pay-btn {
  background: #e03f73;
  color: white;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0.5rem 1rem;
  }

  .pay-btn:hover {
  background: #d2396b;
  }

.clear-all-btn {
  background: #5c6874;
  color: white;
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  font-weight: 600;
  padding: 0.5rem 1rem;
}
</style>