<template>
	<header>
		<h1>Maxime Layet</h1>
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

h1 {
	text-transform: uppercase;
	letter-spacing: 1vh;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		letter-spacing: 2vh;
		transition: 3s;
	}
}
</style>
