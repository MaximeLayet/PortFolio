<template>
	<Header />
	<div id="nav">
		<router-link to="/">À Propos</router-link> | <router-link to="/cv">Mon CV</router-link> |
		<router-link to="/mywork">Mes Projets</router-link>
	</div>
	<router-view />
	<Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
	components: {
		Footer,
		Header
	}
};
</script>

<style lang="scss">
$color-primary: #35495e;
$color-secondary: #db3225;
$color-terciary: #c4db25;
$font-color: #fffdd0;

#app {
	font-family: "Open Sans", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		font-size: 3.5vh;
		color: $color-primary;
		text-decoration: none;

		&.router-link-exact-active {
			color: $color-secondary;
		}
	}
}
</style>
