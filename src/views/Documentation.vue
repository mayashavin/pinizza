<template>
  <div>
    <h1 class="app-header">Auto-generated steps</h1>
    <div>
      <div v-for="(segment, i) in paths.segments" :key="i">
        <span v-if="!segment.state.matches(paths.segments[i - 1]?.state.value)">
          On the <strong>{{getDescription(segment)}}</strong>, 
        </span>
        <span>
          <span v-if="segment.state.matches(paths.segments[i - 1]?.state.value)">... and then </span>
          <strong v-if="getTranstions(segment)[0].meta?.description">{{getTranstions(segment)[0].meta?.description}}</strong>
          <span v-else>Execute event <strong>{{transition.eventType}}</strong> </span>
          <span v-if="getTranstions(segment)[0].cond?.meta?.description"> ({{getTranstions(segment)[0].cond?.meta?.description}})</span>
        </span>
      </div>
      <div>
        Then you will reach 
        <strong> {{getMeta(confirmScenario.state).description}}</strong>
      </div>
    </div>
  </div>
</template>
<script setup>
import { checkoutMachine } from '../machines/checkoutMachine';
import { getShortestPaths } from "@xstate/graph";
import { addresses } from '../assets/shippingData';

const checkoutScenarios = getShortestPaths(checkoutMachine, {
  events: {
    UPDATE_ADDRESS: [
      {
        type: "UPDATE_ADDRESS",
        address: addresses[0]
      }
    ],
    SELECT_METHOD: [
      {
        type: "SELECT_METHOD",
        paymentMethod: "1234"
      }
    ],
    ADD_EMAIL: [
      {
        type: "ADD_EMAIL",
        email: "davidkpiano@example.com"
      }
    ],
    ADD_PHONE: [
      {
        type: "ADD_PHONE",
        phone: "1235551234"
      }
    ],
    AGREE_TO_TERM: [
      {
        type: "AGREE_TO_TERM",
        agreeToTerms: true
      },
      {
        type: "AGREE_TO_TERM",
        agreeToTerms: false
      }
    ]
  }
});


const findScenario = (predicate) => {
  return Object.values(checkoutScenarios).find(predicate);
}

// Change the scenario here!
const confirmScenario = findScenario(
  (scenario) =>
    scenario.state.matches("success") &&
    scenario.state.context.shipping
);

const paths = confirmScenario.paths[0];

function getMeta(state) {
  const keys = Object.keys(state.meta);
  return state.meta[keys[0]];
}

const getTranstions = (segment) => checkoutMachine.transition(segment.state, segment.event).transitions;

const getDescription = (segment) => getMeta(segment.state).description;

</script>
<style scoped>
div {
  font-size: 24px;
}
</style>