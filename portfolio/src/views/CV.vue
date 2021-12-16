<template>
	<div>
		<div class="cv">
			<div class="past">
				<h2 @click="showWorkplace">Mon Passé Professionnel</h2>
				<div class="workplace" v-show="workplace">
					<ul>
						<li>2013 - 2020</li>
						<br />
						<li>2008 - 2012</li>
						<br />
						<li>2007 - 2008</li>
					</ul>

					<ul>
						<li>Lidl</li>
						<br />
						<li>Quick</li>
						<br />
						<li>DisneyLand Paris</li>
					</ul>

					<ul>
						<li>Adjoint Manager</li>
						<br />
						<li>Manager</li>
						<br />
						<li>Cast Member</li>
					</ul>
				</div>
			</div>
			<div class="graduation">
				<h2 @click="showGraduation">Mes Diplômes</h2>
				<div class="workplace" v-show="graduation">
					<ul>
						<li>2021 (En cours)</li>
						<br />
						<li>2021</li>
						<br />
						<li>2004</li>
					</ul>

					<ul>
						<li>Maîtrise de la qualité en projet Web</li>
						<br />
						<li>Développeur Web</li>
						<br />
						<li>Baccalauréat Économique et Social</li>
					</ul>

					<ul>
						<li>26Academy</li>
						<br />
						<li>OpenClassrooms</li>
						<br />
						<li>Lycée de la Vallée du Cailly (76)</li>
					</ul>
				</div>
			</div>
			<div class="opc">
				<h2 @click="showProjects">Mes Projets OpenClassrooms</h2>
				<div class="workplace" v-show="projects">
					<ul>
						<li>Projet 2</li>
						<br />
						<li>Projet 3</li>
						<br />
						<li>Projet 4</li>
						<br />
						<li>Projet 5</li>
						<br />
						<li>Projet 6</li>
						<br />
						<li>Projet 7</li>
						<br />
					</ul>

					<ul>
						<li class="project_name">
							<a
								href="https://github.com/MaximeLayet/MaximeLayet_2_10122020/tree/master"
								target="blank"
								>Reservia</a
							>
						</li>
						<br />
						<li class="project_name"></li>
						<li>
							<a
								href="https://github.com/MaximeLayet/P4_03_codemodifie/tree/master"
								target="blank"
							>
								OhMyFood</a
							>
						</li>
						<br />
						<li class="project_name">
							<a
								href="https://github.com/MaximeLayet/P4_03_codemodifie/tree/master"
								target="blank"
								>La Chouette Agence</a
							>
						</li>
						<br />
						<li class="project_name">
							<a
								href="https://github.com/MaximeLayet/P5_160421_MAXIMELAYET"
								target="blank"
								>Orinoco</a
							>
						</li>
						<br />
						<li class="project_name">
							<a
								href="https://github.com/MaximeLayet/P6_160621/tree/master"
								target="blank"
								>So Peckoko</a
							>
						</li>
						<br />
						<li class="project_name">
							<a href="https://github.com/MaximeLayet/P7_16_07_21" target="blank"
								>Groupomania</a
							>
						</li>
						<br />
					</ul>
					<ul>
						<li>Html/Css</li>
						<br />
						<li>Html/Css et Sass</li>
						<br />
						<li>Analyse SEO</li>
						<br />
						<li>Html/Css et Javascript</li>
						<br />
						<li>Node.JS</li>
						<br />
						<li>Html/Css, Vue.JS, Sequelize</li>
						<br />
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			workplace: false,
			graduation: false,
			projects: false
		};
	},
	methods: {
		showWorkplace(e) {
			e.preventDefault();
			this.workplace = !this.workplace;
		},
		showGraduation(e) {
			e.preventDefault();
			this.graduation = !this.graduation;
		},
		showProjects(e) {
			e.preventDefault();
			this.projects = !this.projects;
		}
	}
};
</script>

<style lang="scss" scoped>
$color-primary: #35495e;
$color-secondary: #db3225;
$color-terciary: #c4db25;
$font-color: #fffdd0;

.past,
.graduation,
.opc {
	border-block: solid 0.5vh $color-secondary;
}

h2 {
	cursor: pointer;
}

i {
	color: orangered;
	font-size: 8vh;
}

a {
	color: #2c3e50;
	text-decoration: none;
	padding-inline: 0.5rem;
	transition: 0.2s;
	&:hover {
		background: $color-terciary;
		color: #fff;
		font-weight: bold;
		border-radius: 0.2em;
		transition: 0.2s;
	}
}

.links {
	display: flex;
	justify-content: space-around;
}

.workplace {
	display: flex;
	justify-content: center;
}

li {
	display: flex;
}
</style>
