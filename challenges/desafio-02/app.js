new Vue({
  el: "#desafio",
  data: {
    valor: "",
  },
  methods: {
    showAlertOnClick() {
      alert("hi!");
    },
    setValue(e) {
      this.valor = e.target.value;
    },
  },
});
