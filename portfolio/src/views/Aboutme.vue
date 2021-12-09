<template>
	<div class="home">
		<h2><span class="sections">Qui suis-je?</span></h2>
		<!-- ajouter un effet machine à écrire?? -->
		<div class="identity">
			<p>
				Je me présente en quelques mots, je m'appelle
				<span class="presentation">Maxime Layet</span> j'ai
				<span class="presentation">{{ age }}</span> ans et je vis à
				<span>Montpellier</span>.<br />
				Si tu es interessé par mon parcours, je t'invite à checker mon <router-link to="/cv"><span class="presentation">CV</span></router-link> sur
				le site. N'hésite pas non plus à aller voir mes
				<router-link to="/mywork"><span class="presentation">side-projects</span></router-link> ou mes
				<router-link to="/mywork"><span class="presentation">missions freelance</span></router-link> précedemment réalisées.<br />Je
				t'invite aussi à aller voir mon profil sur
				<a href="https://malt.fr/profile/maximelayet" target="_blank"
					><span class="presentation">Malt</span></a
				>
				ou encore
				<a href="https://linkedin.com/in/maximelayet/" target="_blank"
					><span class="presentation">LinkedIn</span></a
				>.<br />En cliquant sur mon nom tout en haut, tu trouveras un lien pour m'envoyer un mail sur tu veux me contacter pour
				faire plus ample connaissance.<br />
				<div class="signature">ML</div>
			</p>
		</div>

		<h2><span class="sections">Pourquoi je code?</span></h2>
		<p>
			J'ai été Manager pendant plus de 10 ans. D'abord chez Quick et ensuite (et surtout) chez Lidl.<br>J'y ai appris enormement que ce soit sur mon métier de Manager à proprement dit mais aussi humainement.<br>À travers ces différentes expériences, j'ai aguisé mon sens de la curiosité, développé mon sens critique. J'ai appris à prendre du recul, à gérer des situations de stress,  à être flexible.<br>
			Mais j'ai décidé de changer de direction professionnelle et de me lancer dans le developpement informatique.<br> D'abord attiré par le web design, j'ai ensuite découvert le code et je m'y suis énormement épanouï<br>Je me considère comme un développeur Frontend malgrè une formation qui avait une orientation Fullstack<br>N'hésite pas à me contacter si tu veux échanger un peu plus dans le détail à ce sujet.
		</p>
		<h2><span class="sections">Mes langages</span></h2>
		<h4>nom // niveau: bwarf</h4>
		<h4>nom // niveau: bwarf</h4>
		<h4>nom // niveau: bwarf</h4>
		<h4>nom // niveau: bwarf</h4>
		<h4>nom // niveau: bwarf</h4>
		<h4>nom // niveau: bwarf</h4>
	</div>
</template>

<script>
export default {
	name: "Home",
	//Fonction pour afficher l'âge en temps réel
	data() {
		let birthdate = new Date (1986, 4, 29)
		const age = new Date().getFullYear() - birthdate.getFullYear();
		return {age}
	}
};
</script>

<style scoped lang="scss">
$color-primary: #35495e;
$color-secondary: #db3225;
$color-terciary: #c4db25;
$font-color: #fffdd0;

//Class qui englobe tout le fichier views
.home {
	color: $color-primary;
}

//Pour ce qui concerne la balise a du fichier views
a {
	text-decoration: none;
}

//Class pour les H2 des blocs
.sections {
	border-bottom: 0.5vh solid $color-terciary;
}

//Class pour la partie "Qui suis-je"
.identity {
	display: flex;
	font-size: 2vh;
	justify-content: center;

	.presentation {
		color: $color-secondary;
		font-weight: bold;
	}

	
}

//Pour les initiales à la fin du paragraphe "Qui suis-je"
.signature {
			color: $color-secondary;
			background-color: $color-terciary;
			display: inline;
			float: right;
			padding: 1vh;
			border-radius:50%;
			font-weight: bold;
		}


</style>
