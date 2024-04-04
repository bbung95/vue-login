<script setup lang="ts">
export interface Props {
	text?: string;
	handleOnClick?: () => void;
}

const props = defineProps<Props>();
</script>

<template>
	<button type="button" class="button" @click="props.handleOnClick">{{ props.text ?? '버튼' }}</button>
</template>

<style lang="scss" scoped>
.button {
	cursor: pointer;

	padding: 22px 40px;

	display: flex;
	align-items: center;
	justify-content: center;

	color: var(--white-color);
	font-size: 1.8rem;
	line-height: 1.8rem;
	white-space: nowrap;

	border: none;
	border-radius: 8px;

	background-color: var(--main-color);
}
</style>
