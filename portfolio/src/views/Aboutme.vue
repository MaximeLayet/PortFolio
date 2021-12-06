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
				Si tu es interessé par mon parcours, je t'invite à checker mon <span>CV</span> sur
				le site. N'hésite pas non plus à aller voir mes
				<span class="presentation">side-projects</span> ou mes
				<span class="presentation">missions freelance</span> précedemment réalisées.<br />Je
				t'invite aussi à aller voir mon profil sur
				<a href="https://malt.fr/profile/maximelayet" target="_blank"
					><span class="presentation">Malt</span></a
				>
				ou encore
				<a href="https://linkedin.com/in/maximelayet/" target="_blank"
					><span class="presentation">LinkedIn</span></a
				>.<br />Tu trouveras un lien pour m'envoyer un mail sur tu veux me contacter pour
				faire plus ample connaissance.<br /><div class="signature">ML</div>
			</p>
		</div>

		<h2><span class="sections">Pourquoi je code?</span></h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe atque magnam dolores,
			ipsa maxime possimus consequuntur, a repellendus corrupti deserunt obcaecati distinctio
			quas consectetur molestiae amet molestias aliquam eveniet sit.
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
	data() {
		console.log(Date.now());
	}
};
</script>

<style scoped lang="scss">
$color-primary: #35495e;
$color-secondary: #db3225;
$color-terciary: #c4db25;
$font-color: #fffdd0;

.home {
	color: $color-primary;
}

h1 {
	color: $color-secondary;
	display: flex;
	margin-left: 2vh;
}

.sections {
	border-bottom: 0.5vh solid $color-terciary;
}

.identity {
	display: flex;
	font-size: 2vh;
	justify-content: center;

	.presentation {
		color: $color-secondary;
		font-weight: bold;
	}

	.signature {
		
		font-weight: bold;
		color: $color-secondary;
		background-color: $color-terciary;
		border-radius: 50%;
		
	}
}

a {
	text-decoration: none;
}
</style>
