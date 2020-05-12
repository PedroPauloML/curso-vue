<template>
	<div id="app">
		<h1>Registrar Reclamação</h1>

		<div class="conteudo">
			<form v-if="!enviado" class="painel">
				<div class="cabecalho">Formulário</div>

				<Rotulo nome="E-mail">
					<input type="text" v-model.lazy.trim="usuario.email">
				</Rotulo>

				<Rotulo nome="Senha">
					<input type="password" v-model="usuario.password">
				</Rotulo>

				<Rotulo nome="Idade">
					<input type="number" v-model.number="usuario.idade">
				</Rotulo>

				<Rotulo nome="Mensagem">
					<textarea name="" cols="30" rows="5" v-model="message"></textarea>
				</Rotulo>

				<Rotulo nome="Características do Problema">
					<label class="mr-4">
						<input type="checkbox" value="reproduzivel" v-model="caracteristicas">
						Reproduzível
					</label>

					<label>
						<input type="checkbox" value="intermitente" v-model="caracteristicas">
						Intermitente
					</label>
				</Rotulo>

				<Rotulo nome="Qual produto?">
					<label class="mr-4">
						<input type="radio" value="web" v-model="produto"> Web
					</label>

					<label class="mr-4">
						<input type="radio" value="mobile" v-model="produto"> Mobile
					</label>

					<label>
						<input type="radio" value="outro" v-model="produto"> Outro
					</label>
				</Rotulo>

				<Rotulo nome="Prioridade">
					<select v-model="prioridade">
						<option
							v-for="prioridade in prioridades"
							:key="prioridade.codigo"
							:value="prioridade.codigo">
							{{ prioridade.nome }}
						</option>
					</select>
				</Rotulo>

				<Rotulo nome="Primeira Reclamação?">
					<Escolha v-model="escolha" />
				</Rotulo>

				<hr>
				<button @click.prevent="enviar">Enviar</button>
			</form>

			<div v-else class="painel">
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="E-mail">
					<span>{{ usuario.email }}</span>
				</Rotulo>

				<Rotulo nome="Senha">
					<span>{{ usuario.password }}</span>
				</Rotulo>

				<Rotulo nome="Idade">
					<span>{{ usuario.idade }}</span>
				</Rotulo>

				<Rotulo nome="Mensagem">
					<span style="white-space: pre;">{{ message }}</span>
				</Rotulo>

				<Rotulo nome="Marque as Opções">
					<span>
						<ul>
							<li v-for="(caracteristica, index) in caracteristicas" :key="index">
								{{ caracteristica }}
							</li>
						</ul>
					</span>
				</Rotulo>

				<Rotulo nome="Qual produto?">
					<span>{{ produto }}</span>
				</Rotulo>

				<Rotulo nome="Prioridade">
					<span>{{ nomePrioridade }}</span>
				</Rotulo>

				<Rotulo nome="Primeira Reclamação?">
					<span>{{ escolha ? "Sim" : "Não" }}</span>
				</Rotulo>

				<hr>
				<button @click.prevent="voltar">Voltar</button>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import Escolha from "./components/Escolha.vue";

export default {
  name: "app",
  components: { Rotulo, Escolha },
  computed: {
    nomePrioridade() {
      const prioridade = this.prioridades.filter(
        (p) => p.codigo == this.prioridade
      );
      return prioridade.length ? prioridade[0].nome : "???";
    },
  },
  methods: {
    enviar() {
      this.enviado = true;
    },
    voltar() {
      this.enviado = false;
    },
  },
  data() {
    return {
      message: "",
      caracteristicas: [],
      produto: "web",
      prioridade: 1,
      prioridades: [
        { codigo: 1, nome: "Baixa" },
        { codigo: 2, nome: "Moderada" },
        { codigo: 3, nome: "Alta" },
      ],
      usuario: {
        email: "",
        password: "",
        idade: 25,
      },
      escolha: true,
      enviado: false,
    };
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

/* #app form button { */
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
