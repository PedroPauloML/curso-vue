export default {
  created() {
    console.log("Console - Fruta Mixin");
  },
  data() {
    return {
      fruta: "",
      frutas: ["banana", "maça", "laranja"],
    };
  },
  methods: {
    add() {
      this.frutas.push(this.fruta);
      this.fruta = "";
    },
  },
};
