<template>
  <div id="counters">
    <h1>Counters</h1>
    <app-counter v-for="(c, index) in 5" :key="index" />
  </div>
</template>

<script>
import Counter from "./Counter";

export default {
  components: {
    "app-counter": Counter,
  },
};
</script>

<style></style>
