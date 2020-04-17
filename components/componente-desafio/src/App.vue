<template>
	<v-app>
		<Menu />

		<toolbar />

		<v-content>
			<Carousel />
		</v-content>

    <Footer/>
	</v-app>
</template>

<script>
import Footer from "@/components/template/Footer";
import Carousel from "@/components/widgets/Carousel";
import Toolbar from "@/components/template/Toolbar";
import Menu from "@/components/template/Menu";

export default {
  components: {
    Footer,
    Carousel,
    Toolbar,
    Menu,
  },
};
</script>
