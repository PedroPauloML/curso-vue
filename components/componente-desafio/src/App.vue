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
import Footer from "@/components/template/Footer";
import Carousel from "@/components/widgets/Carousel";
import Toolbar from "@/components/template/Toolbar";
import Menu from "@/components/template/Menu";

export default {
  components: {
    "app-footer": Footer,
    "app-carousel": Carousel,
    "app-toolbar": Toolbar,
    "app-menu": Menu,
  },
};
</script>
