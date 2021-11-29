// Footer present sur toute l'appli avec copyright et lien vers les réseaux sociaux
<template>
	<footer>
		<div class="socials">
			<div>
				<img class="github" src="../assets/512x512-logo-27148.png" alt="logo github" />
			</div>
			<div><img class="malt" src="../assets/logo_malt.png" alt="logo malt" /></div>
			<div>
				<img
					class="linkedin"
					src="../assets/linkedin-logo-png-1840.png"
					alt="logo linkedin"
				/>
			</div>
			<div>
				<img class="twitter" src="../assets/twitter-logo-png-5873.png" alt="logo twitter" />
			</div>
		</div>
		<div class="copyright">&copy; {{ copyrightYear }}</div>
	</footer>
</template>

<script>
export default {
	// Fonction pour mettre à jour automatiquement l'année du copyright
	data() {
		const copyrightYear = new Date().getFullYear();
		return {
			copyrightYear
		};
	}
};
</script>

<style lang="scss" scoped>
$color-primary: #048b9a;
$color-secondary: #f7369f;
$color-terciary: #1ee2f7;
$font-color: #fffdd0;

footer {
	border-top: 1vh solid $color-secondary;
	background-color: $color-primary;
	color: $font-color;
	padding-top: 2vh;
	padding-bottom: 2vh;
}

.github,
.twitter,
.linkedin,
.malt {
	cursor: pointer;
	width: 15vh;
	transition: 0.2s;
	padding: 1vh;
	&:hover {
		transform: scale(1.2);
		transition: 0.2s;
		box-shadow: 1vh 1vh $color-secondary;
		border-radius: 50%;
	}
}

.github,
.twitter {
	padding: 0;
}

.linkedin {
	padding-top: 5vh;
	&:hover {
		border-radius: 15%;
	}
}

.copyright {
	font-weight: bold;
}

.socials {
	display: flex;
	justify-content: space-around;
	margin-top: 2vh;
	margin-bottom: 2vh;
}
</style>
