<script setup lang="ts">
import { Props as InputType } from '../atom/AtomInput.vue';
import { Props as ButtonType } from '../atom/AtomButton.vue';

interface Props extends InputType, ButtonType {
	title?: string;
	buttonText?: string;
	errorMessage?: string;
}

const modelValue = defineModel();
const props = defineProps<Props>();
</script>

<template>
	<div class="input-form">
		<label :for="props.name" v-if="props.title">{{ props.title }}<span>*</span></label>
		<div class="input-wrapper">
			<AtomInput
				v-model="modelValue"
				:type="props.type"
				:name="props.name"
				:placeholder="props.placeholder"
				:isDisabled="props.isDisabled"
				:is-error="props.isError"
			/>
			<AtomButton v-if="props.buttonText" :handleOnClick="props.handleOnClick" :text="props.buttonText" />
		</div>
		<p class="input-message error" v-show="props.isError">{{ errorMessage }}</p>
	</div>
</template>

<style lang="scss" scoped>
.input-form {
	display: flex;
	flex-direction: column;
	gap: 8px;

	& > label {
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

.input-message {
	margin: 8px 0 0 0;

	color: var(--gray-color-500);
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 2.1rem;

	&.error {
		color: var(--error-color);
	}
}
</style>
