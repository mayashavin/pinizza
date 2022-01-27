<template>
    <div class="wrapper">
      <ol class="c-stepper">
      <li class="c-stepper__item" :class="[ state.matches('review') ? 'active' : '']">
        <h3 class="c-stepper__title">Review</h3>
      </li>
      <li class="c-stepper__item" :class="[ state.matches('shipping') ? 'active' : '']">
        <h3 class="c-stepper__title">Shipping</h3>
      </li>
      <li class="c-stepper__item" :class="[ state.matches('billing') ? 'active' : '']">
        <h3 class="c-stepper__title">Billing</h3>
      </li>
      <li class="c-stepper__item" :class="[ state.matches('payment') ? 'active' : '']">
        <h3 class="c-stepper__title">Payment</h3>
      </li>
      <li class="c-stepper__item" :class="[ state.matches('success') ? 'active' : '']">
        <h3 class="c-stepper__title">Confirm</h3>
      </li>
      </ol>
    </div>
</template>
<script setup>
import { useCheckoutMachine } from '../../services/useCheckoutMachine';

const { state } = useCheckoutMachine()
</script>
<style scoped>
.c-stepper {
  display: flex;
  --circle-size: clamp(1rem, 2vw, 2rem);
  --spacing: clamp(0.25rem, 2vw, 0.5rem);
  padding: 0;
  margin: 1rem;
}

.c-stepper__item {
  display: flex;
  gap: var(--spacing);
  align-items: center;  
}

.c-stepper__item::before {
  --size: 3rem;
  content: "";
  display: block;
  width: var(--circle-size);
  height: var(--circle-size);
  border-radius: 50%;
  background-color: lightgrey;
}

.c-stepper__item:not(:last-child) {
    flex: 1;
}

.c-stepper__item:not(:last-child)::after {
  content: "";
  position: relative;
  z-index: -1;
  height: 2px;
  background-color: #e0e0e0;
  flex: 1;
  margin-right: 0.5rem;
}

.c-stepper__title {
  font-size: clamp(1rem, 4vw, 1.25rem);
}

.c-stepper__item.active {
  color: #d5567f;
}

.c-stepper__item.active::before{
  background-color: #d5567f;
}
</style>