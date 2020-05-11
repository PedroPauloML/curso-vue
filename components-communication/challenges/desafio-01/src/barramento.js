import Vue from "vue";
export default new Vue({
  methods: {
    showPerson(person) {
      this.$emit("showPerson", person);
    },
    onShowPerson(callback) {
      this.$on("showPerson", callback);
    },
  },
});
