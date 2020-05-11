<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>#ID</th>
          <th>Nome</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="person in people"
          :key="person.id"
          @click="showPerson(person)"
        >
          <td>{{ person.id }}</td>
          <td>{{ person.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  props: {
    people: Array,
  },
  methods: {
    showPerson(person) {
      barramento.showPerson(person);
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 10px;
  flex: 1;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
  border-top: 1px solid #ddd;
  width: 100%;
}
table thead {
  border-bottom: 2px solid #ddd;
}
table th,
table td {
  border-bottom: 1px solid #ddd;
  padding: 10px;
}
table tbody tr:hover {
  background-color: #eee;
  cursor: pointer;
}
</style>
