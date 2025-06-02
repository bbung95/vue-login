<script setup lang="ts">
export interface Props {
	name: string;
	type?: string;
	placeholder?: string;
	isDisabled?: boolean;
	isError?: boolean;
}

const modelValue = defineModel();
const props = defineProps<Props>();

const placeholder = props.isDisabled ? '' : props.placeholder;
</script>

<template>
	<input
		class="input"
		:class="{ error: isError }"
		:type="props.type ?? 'text'"
		:id="props.name"
		:name="props.name"
		:placeholder="placeholder"
		:disabled="isDisabled"
		v-model="modelValue"
	/>
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
	&:focus {
		border: 1px solid var(--md-color);
	}
	&.error {
		border: 1px solid var(--error-color);
	}
}
</style>
