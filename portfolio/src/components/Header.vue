<template>
	<header>
		<a href="mailto:layetmaxime@gmail.com"><h1>Maxime Layet</h1></a>
	</header>
</template>

<style lang="scss" scoped>
$color-primary: #35495e;
$color-secondary: #db3225;
$color-terciary: #c4db25;
$font-color: #fffdd0;

header {
	background-color: $color-primary;
	color: $color-secondary;
	border-bottom: 1vh solid $color-secondary;
	padding-top: 2vh;
}

a {
	text-decoration: none;
	color: $color-secondary;
}

h1 {
	text-transform: uppercase;
	transition: 0.3s;
	font-size: 8vh;
	cursor: pointer;
	animation: lettersspace 5s forwards;
	&:hover {
		animation: lettersspace 5s forwards;
	}
}

@keyframes lettersspace {
	0% {
		letter-spacing: 1vh;
	}
	50% {
		letter-spacing: 3vh;
	}
	95% {
		letter-spacing: 0vh;
	}
	100% {
		letter-spacing: 1vh;
	}
}
</style>
