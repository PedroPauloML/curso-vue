<template>
  <div class="usuario-editar">
    <h3>Editar Usuário</h3>
    <p><b>Código:</b> {{ id }}</p>
    <p><b>Nome:</b> {{ $route.query.nome }}</p>
    <p><b>Idade:</b> {{ $route.query.idade }}</p>

    <div id="rodape">
      <h3>Curso Vue</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      confirmou: false,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmou) {
      next();
    } else {
      if (confirm("Tem certeza?")) {
        next();
      } else {
        next(false);
      }
    }
  },
};
</script>

<style>
#rodape {
  margin-top: 1000px;
}
</style>
