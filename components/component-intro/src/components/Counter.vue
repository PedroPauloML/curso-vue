<template>
  <div id="counter">
    <button @click="decrement">-</button>
    <span>{{ counter }}</span>
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter++;
    },
  },
};
</script>

<style scoped>
span {
  border-bottom: 1px solid #ccc;
  height: 30px;
  padding: 5px 25px;
}

button {
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: coral;
  color: #fff;
  outline: none;
}
button:first-child {
  margin-right: 10px;
}
button:last-child {
  margin-left: 10px;
}
</style>
