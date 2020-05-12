<template>
	<div id="app">
		<h1>Diretivas</h1>
		<p v-text="'Usando diretiva v-text'"></p>
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
		<hr>
		<p v-destaque="'blue'">Usando diretiva personalizada</p>
		<p v-destaque:fundo="'lightblue'">Usando diretiva personalizada</p>
		<p v-destaque:fundo.atrasar="'lightgreen'">Usando diretiva personalizada</p>
		<hr>
		<p v-detaque-local:fundo.atrasar="'lightgray'">Usando diretiva personalizada</p>
	</div>
</template>

<script>
export default {
  directives: {
    "detaque-local": {
      bind(el, binding, vnode) {
        // el.style.backgroundColor = "lightgreen";
        let atraso = 0;

        if (binding.modifiers["atrasar"]) atraso = 1500;

        setTimeout(() => {
          if (binding.arg === "fundo") {
            el.style.backgroundColor = binding.value;
          } else {
            el.style.color = binding.value;
          }
        }, atraso);
      },
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
  font-size: 2.5rem;
}
</style>
