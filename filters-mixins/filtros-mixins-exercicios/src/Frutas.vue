<template>
  <div>
    <input type="text" v-model="fruta" @keydown.enter="add" />
    <ul>
      <li
        v-for="(f, index) in frutas"
        :key="index">
        {{ f }}
      </li>
    </ul>
  </div>
</template>

<script>
import frutasMixin from "./frutasMixin";

export default {
  mixins: [frutasMixin],
};
</script>

<style>
</style>
