<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<transition-group
			mode="out-in"
			enter-active-class="animated rubberBand"
			leave-active-class="animated rollOut p-absolute">
			<router-view key="menu" name="menu" />
			<router-view key="body" />
		</transition-group>
	</div>
</template>

<script>
export default {};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.p-absolute {
  position: absolute;
}
</style>
