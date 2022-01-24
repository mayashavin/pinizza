<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "NotFound",
  setup() {
    const route = useRoute();
    const id = computed(() => {
      return route.params.pathMatch;
    });
    return {
      id,
    };
  },
};
</script>
<template>
  <div>Not Found</div>
</template>