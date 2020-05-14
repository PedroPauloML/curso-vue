<template>
  <div class="usuario-detalhe">
    <h3>Detalhes do Usuário</h3>
    <p><b>Código:</b> {{ id }}/{{ $route.params.id }}</p>
    <!-- :to="`/usuario/${$route.params.id}/editar`" -->
    <router-link
      :to="{
        name: 'editarUsuario',
        params: { id },
        params: { id },
        query: { nome: 'Pedro', idade: 20 },
        hash: '#rodape',
      }"
      tag="button"
      primario>
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
  // watch: {
  //   $route(to, from) {
  //     this.id = to.params.id;
  //   },
  // },
  beforeRouteEnter(to, from, next) {
    console.log("antes da rota -> usuarioDetalhe (local)");

    next((vm) => {
      console.log(vm.id);
    });
  },
};
</script>

<style>
</style>
