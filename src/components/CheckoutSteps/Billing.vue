<template>
  <h2>Billing Information</h2>
  <strong>Enter contact details</strong>
  <label className="field -input">
    <div>Email</div>
    <input
        type="text"
        placeholder="someone@example.com"
        :value="state.context.billing.email"
        @change="updateEmail"
    />
  </label>
  <label className="field -input">
    <div>Mobile number</div>
    <input
        type="text"
        placeholder="555-1234"
        :value="state.context.billing.phone"
        @change="updatePhone"
    />
  </label>
</template>
<script setup>import { useCheckoutMachine } from '../../services/useCheckoutMachine';

const { state, send } = useCheckoutMachine();

const updateEmail = (e) => {
  send({
    type: 'ADD_EMAIL',
    email: e.target.value
  })
}

const updatePhone = (e) => {
  send({
    type: 'ADD_PHONE',
    phone: e.target.value
  })
}
</script>