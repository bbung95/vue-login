<script setup lang="ts">
import { Form } from 'vee-validate';
import * as Yup from 'yup';

import { ID_REGEX, PASSWORD_REGEX, PHONE_REGEX, SIGNUP_MESSAGE } from '@/constants/form';

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
	address: Yup.string(),
	password: Yup.string()
		.matches(PASSWORD_REGEX, SIGNUP_MESSAGE.PASSWORD)
		.min(8, SIGNUP_MESSAGE.PASSWORD)
		.max(16, SIGNUP_MESSAGE.PASSWORD)
		.required(),
	confirm_password: Yup.string()
		.oneOf([Yup.ref('password')], SIGNUP_MESSAGE.PASSWORD_COMFIRM)
		.required(),
});

const handleOnSubmit = (values: unknown) => {
	/**
	 *  fetch Login API
	 * */
	console.log(values);
	alert('회원가입 완료');
};
</script>

<template>
	<div class="signup-container">
		<Form :validation-schema="schema" @submit="handleOnSubmit" v-slot="{ values }">
			<div class="top-container">
				<h1 class="title">회원 가입</h1>
				<div class="contents-warpper">
					<SignForm :value="values" />
				</div>
			</div>
			<div class="bottom-container">
				<div class="contents-warpper">
					<AgreementForm />
					<SignupButton />
					<TestComponent />
				</div>
			</div>
		</Form>
	</div>
</template>

<style lang="scss" scoped>
.signup-container {
	width: 100%;
	height: 100%;
}

.top-container {
	width: 100%;

	padding: 200px 20px 80px;

	& > .title {
		margin: 0;
		margin-bottom: 80px;

		font-size: 4rem;
		text-align: center;
	}
}

.bottom-container {
	width: 100%;

	padding: 80px 20px 193px;

	background-color: var(--lt-color);
}

.contents-warpper {
	max-width: 610px;
	width: 100%;

	margin: 0 auto;
}

@media (max-width: 578px) {
	.top-container {
		padding: 60px 20px 80px;

		& > .title {
			margin-bottom: 40px;
		}
	}

	.bottom-container {
		padding: 50px 20px 120px;
	}
}
</style>
