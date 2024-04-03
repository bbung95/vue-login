<script setup lang="ts">
import { Props as InputType } from '../atom/AtomInput.vue';
import { Props as ButtonType } from '../atom/AtomButton.vue';

interface Props extends InputType, ButtonType {
	title?: string;
	buttonText?: string;
}

const modelValue = defineModel();
const props = defineProps<Props>();
</script>

<template>
	<div class="input-form">
		<h2 v-if="props.title">{{ props.title }}<span>*</span></h2>
		<div class="input-wrapper">
			<AtomInput v-model="modelValue" :placeholder="props.placeholder" :isDisabled="props.isDisabled" />
			<AtomButton v-if="buttonText" :handleOnClick="props.handleOnClick"> {{ buttonText }} </AtomButton>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.input-form {
	display: flex;
	flex-direction: column;
	gap: 8px;

	& > h2 {
		margin: 0;

		font-size: 1.8rem;
		font-weight: 500;
		line-height: 2.1rem;

		& > span {
			font-size: 1.8rem;
			font-weight: 500;
			line-height: 2.1rem;

			color: var(--error-color);
		}
	}
}
.input-wrapper {
	display: flex;
	flex-direction: row;
	gap: 12px;
}
</style>
