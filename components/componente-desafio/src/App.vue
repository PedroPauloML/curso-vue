<template>
	<v-app>
		<app-menu />

		<app-toolbar />

		<v-content>
			<app-carousel />
		</v-content>

    <app-footer/>
	</v-app>
</template>

<script>
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Toolbar from "./components/Toolbar";
import Menu from "./components/Menu";

export default {
  components: {
    "app-footer": Footer,
    "app-carousel": Carousel,
    "app-toolbar": Toolbar,
    "app-menu": Menu,
  },
};
</script>
