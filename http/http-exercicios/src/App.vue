<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>

    <b-alert
      show
      dismissible
      v-for="(mensagem, index) in mensagens"
      :key="mensagem.texto"
      :variant="mensagem.tipo"
    >
      {{ mensagem.texto }}
    </b-alert>

    <b-card>
      <b-form-group label="Nome:">
        <b-form-input
          type="text"
          size="lg"
          v-model="usuario.nome"
          placeholder="Informe o nome" />
      </b-form-group>

      <b-form-group label="E-mail:">
        <b-form-input
          type="text"
          size="lg"
          v-model="usuario.email"
          placeholder="Informe o e-mail" />
      </b-form-group>

      <hr>
      <b-button
        variant="primary"
        @click.prevent="salvar"
        size="lg"
        :block="true"
        :disabled="enviandoFormulario"
        class="mr-4">
        Salvar
      </b-button>

    </b-card>

    <b-card class="mt-4">
      <b-button
        variant="info"
        size="lg"
        :block="true"
        class="mb-4"
        @click="obterUsuarios"
        :disabled="buscandoUsuarios"
      >
        Obter usuários
      </b-button>

      <b-list-group>
        <b-list-group-item
          v-for="(usuario, id) in usuarios"
          :key="id"
        >
          <p><b>ID:</b> {{ id }}</p>
          <p><b>Nome:</b> {{ usuario.nome }}</p>
          <p><b>E-mail:</b> {{ usuario.email }}</p>
          <b-button
            variant="warning"
            size="lg"
            class="mr-2"
            @click="carregar(id)"
          >
            Carregar
          </b-button>
          <b-button
            variant="danger"
            size="lg"
            @click="excluir(id)"
            :disabled="excluindoUsuario"
          >
            Excluir
          </b-button>
        </b-list-group-item>
      </b-list-group>
    </b-card>
	</div>
</template>

<script>
export default {
  data() {
    return {
      enviandoFormulario: false,
      buscandoUsuarios: false,
      excluindoUsuario: false,
      mensagens: [],
      usuarios: [],
      id: null,
      usuario: {
        nome: "",
        email: "",
      },
    };
  },
  methods: {
    limpar() {
      this.usuario.nome = "";
      this.usuario.email = "";
      this.id = null;
      this.mensagens = [];
    },
    salvar() {
      const metodo = this.id ? "patch" : "post";
      const url = this.id ? `/usuarios/${this.id}.json` : "usuarios.json";

      this.enviandoFormulario = true;
      this.$http[metodo](url, this.usuario).then(() => {
        this.limpar();
        this.enviandoFormulario = false;
        this.mensagens.push({
          texto: "Operação realizada com sucesso!",
          tipo: "success",
        });
      });
    },
    obterUsuarios() {
      this.buscandoUsuarios = true;
      this.$http.get("usuarios.json", this.usuario).then((res) => {
        this.usuarios = res.data;
        this.buscandoUsuarios = false;
        console.log(this.usuarios);
      });
    },
    carregar(id) {
      this.id = id;
      this.usuario = { ...this.usuarios[id] };
    },
    excluir(id) {
      this.excluindoUsuario = true;
      this.$http
        .delete(`/usuarios/${id}.json`, this.usuario)
        .then(() => {
          this.limpar();
          this.excluindoUsuario = false;
        })
        .catch((err) => {
          this.mensagens.push({
            texto: "Problema para excluir",
            tipo: "danger",
          });
        });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
