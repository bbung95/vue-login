<script setup lang="ts"></script>

<template>
	<main class="container">
		<slot />
	</main>
</template>

<style lang="scss" scoped>
$media-tablet: 768px;
$media-mobile: 578px;
.container {
	max-width: var(--media-desktop);
	width: 100%;
	height: 100vh;

	margin: 0 auto;
	background-color: aqua;

	@media (max-width: #{$media-tablet}) {
		background-color: red;
	}
	@media (max-width: #{$media-mobile}) {
		background-color: blue;
	}
}
</style>
