new Vue({
  el: "#desafio",
  data: {
    classOfEffect: "",
    classFromInput1: "",
    classFromInput2: "",
    classFromInput3: "",
    showClassFromInput: "false",
    progressStyle: {
      backgroundColor: "purple",
      height: "50px",
      width: "10px",
    },
    progress: 0,
  },
  methods: {
    iniciarEfeito() {
      setInterval(() => {
        this.classOfEffect == "destaque"
          ? (this.classOfEffect = "encolher")
          : (this.classOfEffect = "destaque");
      }, 500);
    },
    iniciarProgresso() {
      interval = setInterval(() => {
        if (this.progress < 400) {
          this.progress += 10;
          this.progressStyle.width = `${this.progress}px`;
        } else {
          clearInterval(interval);
        }
      }, 100);
    },
  },
});
