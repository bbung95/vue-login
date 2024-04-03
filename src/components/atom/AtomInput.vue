<script setup lang="ts">
interface Props {
	isDisabled?: boolean;
	placeholder?: string;
}

const modelValue = defineModel();
const props = defineProps<Props>();

const placeholder = props.isDisabled ? '' : props.placeholder;
</script>

<template>
	<input class="input" :placeholder="placeholder" v-model="modelValue" :disabled="isDisabled" />
</template>

<style lang="scss" scoped>
.input {
	width: 100%;
	height: 62px;

	padding: 20px 30px;

	font-size: 1.8rem;

	border: 1px solid var(--gray-color-500);
	border-radius: 8px;

	background-color: var(--white-color);

	outline: none;

	&::placeholder {
		color: var(--gray-color-500);
		font-size: 1.8rem;
	}

	&:disabled {
		background-color: var(--gray-color-200);
	}
}
</style>
