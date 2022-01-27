<template>
  <h2>Confirmation</h2>
  <p>Your order has been placed!</p>
  <section>
    <h3>Your order details:</h3>
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
    <div>
      <h4>Shipping information</h4>
      <p>
        Address: {{ state.context.shipping.address }}
      </p>
      <p>
        Phone: {{ state.context.shipping.phone }}
      </p>      
      <p>
        Email: {{ state.context.shipping.email }}
      </p>
      <p>
        Shipping method: {{ state.context.shippingMethod }}
      </p>
    </div>
    <div>
      <h4>Billing information</h4>
      <p>
        Address: {{ state.context.billing.address }}
      </p>
      <p>
        Phone: {{ state.context.billing.phone }}
      </p>      
      <p>
        Email: {{ state.context.billing.email }}
      </p>
    </div>    
    <div>
      <h4>Payment information</h4>
      <p>
        {{ paymentMethods.find(payment => payment.id === state.context.paymentMethod).description }}
      </p>
    </div>
  </section>    
</template>
<script setup>
import { useCheckoutMachine } from '../../services/useCheckoutMachine';
import { useCart } from '../../stores/useCart';
import { paymentMethods } from '../../assets/shippingData';
const { state } = useCheckoutMachine()
const cart = useCart()

</script>

  <style scoped>
  * {
    font-size: 18px;
  }
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

</style>