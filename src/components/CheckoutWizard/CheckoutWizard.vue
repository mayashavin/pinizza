<template>
  <h1 class="app-header">Check out</h1>
  <section>
    <CheckoutWizardHeader />
    <div class="step-view">
      <ReviewCart v-if="state.matches('review')" />
      <Shipping v-if="state.matches('shipping')" />
      <Billing v-if="state.matches('billing')" />
      <Payment v-if="state.matches('payment')" />
      <Confirmation v-if="state.matches('success')" />
    </div>
    <div>
      <button
        class="prev-btn" 
        @click="send('PREV')" 
        v-if="!state.matches('review') && !state.matches('success')"
      >Back</button>
      <button 
        class="next-btn" 
        @click="send('NEXT')" 
        v-if="!state.matches('success')" 
        :disabled="!state.machine.transition(state, 'NEXT').changed"
      >Next</button>
    </div>
  </section>
</template>
<script setup>
import Shipping from '../CheckoutSteps/Shipping.vue';
import ReviewCart from '../CheckoutSteps/ReviewCart.vue';
import Billing from '../CheckoutSteps/Billing.vue';
import Payment from '../CheckoutSteps/Payment.vue';
import Confirmation from '../CheckoutSteps/Confirmation.vue';

import { useCheckoutMachine } from '../../services/useCheckoutMachine';
import CheckoutWizardHeader from './CheckoutWizardHeader.vue';

const { state, send } = useCheckoutMachine()

window.machines = { checkout: { state }}
</script>
<style scoped>
.next-btn, .prev-btn{
  background: #e03f73;
  color: white;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
}

.next-btn:disabled{
  background: #e0e0e0;
  color: black;
}

.prev-btn:disabled{
  background: #e0e0e0;
  color: #d5567f;
}

.step-view {
  margin-block: 2rem;
}
</style>