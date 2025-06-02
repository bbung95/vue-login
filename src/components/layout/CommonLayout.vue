<script setup lang="ts"></script>

<template>
	<main class="container">
		<HeaderNav />

		<slot />
		<FooterBar />
	</main>
</template>

<style lang="scss" scoped>
$media-tablet: 768px;
$media-mobile: 578px;
.container {
	min-width: var(--min-width);
	/* max-width: var(--max-width); */
	min-height: 100vh;
	width: 100%;

	margin: 0 auto;
	background-color: var(--white-color);

	/* @media (max-width: #{$media-tablet}) {
		background-color: red;
	}
	@media (max-width: #{$media-mobile}) {
		background-color: blue;
	} */
}
</style>
