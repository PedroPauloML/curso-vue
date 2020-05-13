<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<!-- <b-button
			variant="primary"
			class="mb-4"
			@click="exibir = !exibir">
			Mostrar Mensagem
		</b-button> -->

    <!-- Simple transition -->
		<!-- <transition name="fade" appear>
			<b-alert variant="info" show v-show="exibir">
				{{ msg }}
			</b-alert>
		</transition>

		<transition name="slide" type="animation" appear>
			<b-alert variant="info" show v-show="exibir">
				{{ msg }}
			</b-alert>
		</transition> -->

    <!-- Transition with class -->
		<!-- <transition
      enter-active-class="animated bounce"
      leave-active-class="animated shake"
      appear>
			<b-alert variant="info" show v-show="exibir">
				{{ msg }}
			</b-alert>
		</transition> -->

    <hr>
    <!-- Dynamic transition  -->
    <!-- <b-select v-model="tipoAnimacao" class="mb-4">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>

		<transition :name="tipoAnimacao" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">
				{{ msg }}
			</b-alert>
			<b-alert variant="warning" show v-else key="warning">
				{{ msg }}
			</b-alert>
		</transition> -->

    <hr>
    <!-- Transition with JS -->
    <!-- <b-button @click="exibir2 = !exibir2">Alternar</b-button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"

      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div class="caixa" v-if="exibir2"></div>
    </transition> -->

    <hr>
    <!-- Transition with dynamic components -->
    <!-- <div class="mb-4">
      <b-button
        variant="primary"
        class="mr-2"
        @click="componentSelecionado = 'AlertaInfo'">
        Info
      </b-button>
      <b-button
        variant="secondary"
        @click="componentSelecionado = 'AlertaAdvertencia'">
        Advetência
      </b-button>
    </div>
    <transition name="fade" mode="out-in">
      <component :is="componentSelecionado"></component>
    </transition> -->

    <hr>
    <b-button @click="adicionarAluno" class="mb-4">Adicionar Aluno</b-button>
    <b-list-group>
      <transition-group name="slide">
        <b-list-group-item
          v-for="(aluno, indice) in alunos" :key="aluno"
          @click="removerAluno(indice)">
          {{ aluno }}
        </b-list-group-item>
      </transition-group>
    </b-list-group>
	</div>
</template>

<script>
import AlertaAdvertencia from "./AlertaAdvertencia";
import AlertaInfo from "./AlertaInfo";

export default {
  components: { AlertaAdvertencia, AlertaInfo },
  data() {
    return {
      alunos: ["Roberto", "Julia", "Teresa", "Paulo"],
      msg: "Uma mensagem de informação para o usuário!",
      exibir: false,
      exibir2: true,
      tipoAnimacao: "fade",
      larguraBase: 0,
      componentSelecionado: "AlertaInfo",
    };
  },
  methods: {
    adicionarAluno() {
      const s = Math.random()
        .toString(36)
        .substring(2);
      this.alunos.push(s);
    },
    removerAluno(indice) {
      this.alunos.splice(indice, 1);
    },
    animar(el, done, negativo) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura =
          this.larguraBase + (negativo ? -rodada * 10 : rodada * 10);
        el.style.width = novaLargura + "px";
        rodada++;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    beforeEnter(el) {
      // console.log("beforeEnter");
      this.larguraBase = 0;
      el.style.width = this.larguraBase + "px";
    },
    enter(el, done) {
      // console.log("enter");
      this.animar(el, done, false);
    },
    afterEnter(el) {
      // console.log("afterEnter");
    },
    enterCancelled(el) {
      // console.log("enterCancelled");
    },
    beforeLeave(el) {
      // console.log("beforeLeave");
      this.larguraBase = 300;
      el.style.width = this.larguraBase + "px";
    },
    leave(el, done) {
      // console.log("leave");
      this.animar(el, done, true);
    },
    afterLeave(el) {
      // console.log("afterLeave");
    },
    leaveCancelled(el) {
      // console.log("leaveCancelled");
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}

.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}
.slide-enter-active {
  animation: slide-in 0.5s ease;
  transition: opacity 0.5s;
}
.slide-leave-active {
  position: absolute;
  width: 100%;
  animation: slide-out 0.5s ease;
  transition: opacity 0.5s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-to,
.slide-leave {
  opacity: 1;
}
.slide-move {
  transition: transform 0.5s;
}
</style>
