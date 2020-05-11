<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <!-- <p>Nome do usuário: <b>{{ nome }}</b></p> -->
    <p>Nome do usuário: <b>{{ inverterNome() }}</b></p>
    <button @click="reiniciarNome">Reiniciar Nome</button>
  </div>
</template>

<script>
export default {
  props: {
    // nome: String,
    nome: {
      type: String,
      // required: true,
      default: "Anônimo",
    },
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
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
