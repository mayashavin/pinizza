<template>
  <h2>Payment</h2>
  <section>
    <ul>
      <li :key="method.id" v-for="method in paymentMethods">
          <label
            className="field -radio"
            :data-checked="isSelected(method.id)"
          >
          <div>{{method.description}}</div>
          <input
              type="radio"
              :checked="isSelected(method.id)"
              @change="(e) => selectPaymentMethod(e, method.id)"
          />
          </label>
      </li>
    </ul>
    <div>
      <label className="simple-field">
        <input
          type="checkbox"
          :value="state.context.agreeToTerms"
          @change="agreeToTerm"
        />
        <span>I agree to the terms and conditions</span>
      </label>
    </div>
  </section>
</template>
<script setup>
import { paymentMethods } from "../../assets/shippingData";
import { useCheckoutMachine } from "../../services/useCheckoutMachine";
const { state, send } = useCheckoutMachine();

const agreeToTerm = (e) => {
  send({ type: "AGREE_TO_TERM", agreeToTerms: e.target.checked });
};

const selectPaymentMethod = (e, id) => {  
  e.target.checked && send({ type: "SELECT_METHOD", paymentMethod: id });
};

const isSelected = (id) => {
  return state.value.context.paymentMethod === id;
};
</script>
<style scoped>
section {
  margin-inline: 10rem;
}
.field {
  --color: rgb(224, 224, 224);
  border: 2px solid var(--color);
  display: grid;
  padding: 1rem;
  margin-bottom: 1rem;
}

.field.-radio {
  grid-template-columns: 1fr 2rem;
  grid-column-gap: 1rem;
}

.field.-radio > input {
  align-self: center;
}

.field.-input {
    padding: 0;
}

.field.-input > div {
  padding: .25rem .5rem 0;
}

.field.-input > input {
  appearance: none;
  background: transparent;
  border: none;
  padding: .5rem;
  font-size: 1rem;
}

.field.-input[data-checked] > input {
  border-color: rgb(0, 109, 183);
}


.simple-field {
  margin: 1rem 0;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 1rem;
}

</style>