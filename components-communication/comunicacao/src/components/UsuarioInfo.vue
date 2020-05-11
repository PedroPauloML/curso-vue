<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <!-- <p>Nome do usuário: <b>{{ nome }}</b></p> -->
    <p>Nome do usuário: <b>{{ inverterNome() }}</b></p>
    <p>Idade do usuário: <b>{{ idade }}</b></p>
    <button @click="reiniciarNome">Reiniciar Nome</button>
    <button @click="reiniciarFn">Reiniciar Nome (Callback)</button>
  </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  props: {
    // nome: String,
    nome: {
      type: String,
      // required: true,
      default: "Anônimo",
    },
    idade: Number,
    reiniciarFn: Function,
  },
  data() {
    return {
      initial: {
        nome: this.$props.nome,
      },
    };
  },
  methods: {
    inverterNome() {
      return this.nome
        .split("")
        .reverse()
        .join("");
    },
    reiniciarNome() {
      this.$emit("nomeMudou", this.initial.nome);
    },
  },
  created() {
    barramento.quandoIdadeMudar((idade) => {
      this.idade = idade;
    });
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
