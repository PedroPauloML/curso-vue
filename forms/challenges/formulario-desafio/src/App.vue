<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form v-if="!sent" class="painel">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<Rotulo nome="First name">
					<input type="text" v-model="firstName" />
				</Rotulo>
				<Rotulo nome="Last name">
					<input type="text" v-model="lastName" />
				</Rotulo>
				<!-- Email -->
				<Rotulo nome="E-mail">
					<input type="email" v-model="email" />
				</Rotulo>
				<!-- Senha -->
				<Rotulo nome="Password">
					<input type="password" v-model="password" />
				</Rotulo>
				<!-- Armazenar Dados? (Sim/Não) -->
				<label class="mr-4">
					<input type="checkbox" value="true" v-model="saveData">
					Yes, I want save the data from this form
				</label>

				<hr>
				<button @click.prevent="sendForm">Send</button>
			</form>

			<!-- Exercicio 02 -->
			<!-- Só mostrar o fomulário de não tiver sido submetido -->
			<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->

			<div v-else class="painel">
				<div class="cabecalho">Resultado</div>

				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
				<Rotulo nome="Full name">
					<NomeCompleto :firstName="firstName" :lastName="lastName" />
				</Rotulo>
				<!-- Email -->
				<Rotulo nome="E-mail">
					<p>{{ email }}</p>
				</Rotulo>
				<!-- Senha -->
				<Rotulo nome="Password">
					<p>{{ password }}</p>
				</Rotulo>
				<!-- Armazenar Dados? (Sim/Não) -->
				<Rotulo nome="To save data?">
					<p>{{ saveData ? "Yes" : "No" }}</p>
				</Rotulo>

				<hr>
				<button @click.prevent="resetForm">Back</button>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import NomeCompleto from "./components/NomeCompleto.vue";

export default {
  name: "app",
  components: { Rotulo, NomeCompleto },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      saveData: false,
      sent: false,
    };
  },
  created() {
    this.firstName = localStorage.getItem("firstName") || "";
    this.lastName = localStorage.getItem("lastName") || "";
    this.email = localStorage.getItem("email") || "";
    this.password = localStorage.getItem("password") || "";
    this.saveData = localStorage.getItem("saveData") || false;
  },
  methods: {
    sendForm() {
      if (this.saveData) {
        localStorage.setItem("firstName", this.firstName);
        localStorage.setItem("lastName", this.lastName);
        localStorage.setItem("email", this.email);
        localStorage.setItem("password", this.password);
        localStorage.setItem("saveData", this.saveData);
      } else {
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("saveData");
      }
      this.sent = true;
    },
    resetForm() {
      localStorage.removeItem("firstName");
      localStorage.removeItem("lastName");
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("saveData");
      this.sent = false;
    },
  },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
