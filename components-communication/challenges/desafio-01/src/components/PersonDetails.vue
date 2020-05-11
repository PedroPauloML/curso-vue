<template>
  <div class="container">
    <div v-if="!!person">
      <p><b>ID:</b> {{ person.id }}</p>
      <p><b>Name:</b> {{ person.name }}</p>
      <p><b>Age:</b> {{ person.age }}</p>
    </div>
    <div v-else>
      <h3>Usuário não selecionado!</h3>
    </div>
  </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  data() {
    return {
      person: undefined,
    };
  },
  created() {
    barramento.onShowPerson((person) => {
      this.person = person;
    });
  },
};
</script>

<style scoped>
.container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  border: 1px solid #ddd;
  padding: 20px;
}
</style>
