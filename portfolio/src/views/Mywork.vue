<template>
	<div>
		<div class="title">
			<h2 @click="showSideProject">Side-Project</h2>
			<div v-show="side">
				<ul>
					<a href="https://github.com/MaximeLayet/portfolio" target="_blank"
						><p>Mon site perso</p></a
					>
				</ul>
				<ul>
					<a href="https://maximelayet.github.io/rebours/">
						<p>Mise en place d'un compte à rebours</p>
					</a>
					<a href="https://github.com/MaximeLayet/rebours"><p>Le lien github</p></a>
				</ul>
				<ul>
					<a href="https://github.com/MaximeLayet/ProjetNivO" target="_blank">
						<p>
							Création d'un Forum pour permettre à différents créateurs de se
							rencontrer (en cours)
						</p>
					</a>
				</ul>
				<ul>
					<a href="https://github.com/MaximeLayet/round_robin" target="_blank">
						<p>Création d'un site pour pouvoir créer des titages au sort (en cours)</p>
					</a>
				</ul>
			</div>
		</div>
		<div class="title">
			<h2 @click="showFreeProject">Projet Freelance</h2>
			<div v-show="free">
				<p>
					Un projet en cours pour
					<a
						class="fumerie"
						href="https://github.com/MaximeLayet/La_Fumerie"
						target="_blank"
						>La Fumerie</a
					>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			side: false,
			free: false
		};
	},
	methods: {
		showSideProject(e) {
			e.preventDefault();
			this.side = !this.side;
		},
		showFreeProject(e) {
			e.preventDefault();
			this.free = !this.free;
		}
	}
};
</script>

<style lang="scss" scoped>
$color-primary: #35495e;
$color-secondary: #db3225;
$color-terciary: #c4db25;
$font-color: #fffdd0;

h2 {
	cursor: pointer;
	padding-top: 1vh;
	padding-bottom: 1vh;
	transition: 0.3s;
	&:hover {
		color: $color-secondary;
		background-color: $color-primary;
		transition: 0.2s;
	}
}

a {
	text-decoration: none;
}

.fumerie {
	color: $color-secondary;
	font-weight: bold;
	cursor: pointer;

	border-radius: 1.5rem;
	padding: 0.5rem;
	transition: 0.2s;
	&:hover {
		color: #fff;
		background-color: #000;
		transition: 0.3s;
	}
}
</style>
