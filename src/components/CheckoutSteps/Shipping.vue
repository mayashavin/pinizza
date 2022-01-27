<template>
  <h2>Shipping</h2>
  <section>
    <ul>      
      <li :key="address.id" v-for="address in addresses">
        <label
          class="field -radio"
          :data-checked="isSelectedShippingAddress(address.id)"
        >
          <div>
            <div>{{address.name}}</div>
            <div>{{address.address}}</div>
          </div>
          <input
            type="radio"
            :checked="isSelectedShippingAddress(address.id)"
            @change="setShippingAddress(address)"                  
          />
        </label>
      </li>
    </ul>
    <label htmlFor="useAsBilling">
      <input type="checkbox" name="useAsBilling" id="useAsBilling" @change="useSameBilling"/>
      <span>Use this as my billing address</span>
    </label>
    <div v-show="state.context.shipping.id">
      <h2>Select shipping method</h2>
      <ul>
        <li :key="method.value" v-for="method in shippingMethods">
          <label
            className="field -radio"
            :data-checked="isSelectedShippingMethod(method.value)"
          >
            <div>{{method.label}}</div>
            <input
              type="radio"
              :checked="isSelectedShippingMethod(method.value)"
              @change="setShippingMethod(method.value)"
            />
          </label>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import { addresses, shippingMethods } from "../../assets/shippingData";
import { useCheckoutMachine } from "../../services/useCheckoutMachine";

const { state, send } = useCheckoutMachine();
const setShippingAddress = (address) => {
  send({
      type: "UPDATE_ADDRESS",
      address
  });
};

const isSelectedShippingAddress = (id) => {
  return state.value.context.shipping.id === id;
};

const isSelectedShippingMethod = (value) => {
  return state.value.context.shippingMethod === value;
};

const setShippingMethod = (value) => {
  send({
      type: "SELECT_METHOD",
      method: value
  });
};

const useSameBilling = (e) => {
  send({
      type: "USE_SAME_BILLING"
  });
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