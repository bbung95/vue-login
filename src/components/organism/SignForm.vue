<script setup lang="ts">
// import { ref } from 'vue';
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import { ID_REGEX, PHONE_REGEX, SIGNUP_MESSAGE } from '@/constants/form';

const emit = defineEmits(['submit']);

// const formData = ref({
// 	id: '',
// 	name: '',
// 	phone: '',
// 	email: '',
// 	address: '',
// 	password: '',
// });

const koreanErrorMessages = {
	mixed: {
		default: '잘못된 값입니다.',
		required: '필수 입력 항목입니다.',
	},
};
Yup.setLocale(koreanErrorMessages);

const schema = Yup.object().shape({
	id: Yup.string().matches(ID_REGEX, SIGNUP_MESSAGE.ID).min(8, SIGNUP_MESSAGE.ID).max(16, SIGNUP_MESSAGE.ID).required(),
	name: Yup.string().required(),
	email: Yup.string().email(SIGNUP_MESSAGE.EMAIL).required(),
	phone: Yup.string().matches(PHONE_REGEX, SIGNUP_MESSAGE.PHONE).required(),
	address: Yup.string().required(),
	password: Yup.string().min(8, SIGNUP_MESSAGE.PASSWORD).max(16, SIGNUP_MESSAGE.PASSWORD).required(),
	confirm_password: Yup.string().required(),
});

const handleOnSubmit = (value: unknown) => {
	emit('submit', value);
};
</script>

<template>
	<Form class="signup-form" :validation-schema="schema" @submit="handleOnSubmit">
		<Field name="id" v-slot="{ field, errorMessage, meta }">
			<InputForm
				title="아이디"
				v-bind="field"
				placeholder="아이디 입력"
				buttonText="중복확인"
				:error-message="errorMessage"
				:is-error="!!errorMessage && !meta.valid"
			/>
		</Field>
		<Field name="name" v-slot="{ field, errorMessage, meta }">
			<InputForm
				title="이름"
				v-bind="field"
				placeholder="이름 입력"
				:error-message="errorMessage"
				:is-error="!!errorMessage && !meta.valid"
			/>
		</Field>
		<Field name="phone" v-slot="{ field, errorMessage, meta }">
			<InputForm
				title="휴대폰번호"
				v-bind="field"
				placeholder="휴대폰번호 11자리 입력"
				buttonText="인증"
				:error-message="errorMessage"
				:is-error="!!errorMessage && !meta.valid"
			/>
		</Field>
		<Field name="email" v-slot="{ field, errorMessage, meta }">
			<InputForm
				title="이메일"
				v-bind="field"
				placeholder="example@example.com"
				:error-message="errorMessage"
				:is-error="!!errorMessage && !meta.valid"
			/>
			<p class="input-message">주문, 고객 상담 등 원화한 정보 제공을 위해 정확히 기입해 주세요.</p>
		</Field>
		<Field name="address" v-slot="{ field, errorMessage, meta }">
			<InputForm
				title="주소"
				v-bind="field"
				buttonText="주소찾기"
				:error-message="errorMessage"
				:isDisabled="true"
				:is-error="!!errorMessage && !meta.valid"
			/>
		</Field>
		<Field name="password" v-slot="{ field, errorMessage, meta }">
			<InputForm
				title="비밀번호"
				v-bind="field"
				placeholder="비밀번호 입력"
				:error-message="errorMessage"
				:is-error="!!errorMessage && !meta.valid"
			/>
		</Field>
		<Field name="confirm_password" v-slot="{ field, errorMessage, meta }">
			<InputForm
				class="confirm-password"
				v-bind="field"
				placeholder="비밀번호 확인"
				:error-message="errorMessage"
				:is-error="!!errorMessage && !meta.valid"
			/>
		</Field>
	</Form>
</template>

<style lang="scss" scoped>
.signup-form {
	width: 100%;

	margin-bottom: 80px;

	display: flex;
	flex-direction: column;

	background-color: var(--white-color);

	& > div {
		margin-top: 30px;

		&:first-child {
			margin-top: 0;
		}
	}

	& > .confirm-password {
		margin-top: 12px;
	}
}

.input-message {
	margin: 8px 0 0 0;

	color: var(--gray-color-500);
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 2.1rem;
}
</style>
