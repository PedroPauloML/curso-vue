<template>
  <div class="container">
    <PeopleList :people="people" />
    <PersonDetails />
  </div>
</template>

<script>
import PeopleList from "./PeopleList";
import PersonDetails from "./PersonDetails";

export default {
  components: { PeopleList, PersonDetails },
  data() {
    return {
      people: [
        { id: 1, name: "Ana", age: 10 },
        { id: 2, name: "Carlos", age: 20 },
        { id: 3, name: "Daniel", age: 30 },
        { id: 4, name: "Ema", age: 40 },
        { id: 5, name: "Lia", age: 50 },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
</style>
