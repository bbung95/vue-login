<script setup lang="ts">
import { Form } from 'vee-validate';
import * as Yup from 'yup';

import { ID_REGEX, PHONE_REGEX, SIGNUP_MESSAGE } from '@/constants/form';

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
	// address: Yup.string().required(),
	password: Yup.string().min(8, SIGNUP_MESSAGE.PASSWORD).max(16, SIGNUP_MESSAGE.PASSWORD).required(),
	confirm_password: Yup.string().required(),
});

const handleOnSubmit = (values: unknown) => {
	console.log(values);
};
</script>

<template>
	<div class="signup-container">
		<h1>회원 가입</h1>
		<Form :validation-schema="schema" @submit="handleOnSubmit">
			<SignForm />
			<AgreementForm />
			<SignupButton />
		</Form>
	</div>
</template>

<style lang="scss" scoped>
.signup-container {
	max-width: 610px;
	width: 100%;

	margin: 200px auto 193px;
	padding: 0 20px;

	& > h1 {
		margin: 0;
		margin-bottom: 80px;

		font-size: 40px;
		text-align: center;
	}
}
</style>
