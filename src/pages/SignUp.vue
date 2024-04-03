<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
	id: '',
	name: '',
	phone: '',
	email: '',
	address: '',
	password: '',
});
</script>

<template>
	<div class="signup-container">
		<h1>회원 가입</h1>
		<div class="signup-form">
			<InputForm title="아이디" v-model="formData.id" placeholder="아이디 입력" buttonText="중복확인" />
			<InputForm title="이름" v-model="formData.name" placeholder="이름 입력" />
			<InputForm title="휴대폰번호" v-model="formData.phone" placeholder="휴대폰번호 11자리 입력" buttonText="인증" />
			<InputForm title="이메일" v-model="formData.email" placeholder="example@example.com" />
			<InputForm title="주소" v-model="formData.address" :isDisabled="true" buttonText="주소찾기" />
			<InputForm title="비밀번호" v-model="formData.password" placeholder="비밀번호 입력" />
		</div>
		<!-- <div class="agreement-form">dsds</div> -->
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

.signup-form {
	width: 100%;

	display: flex;
	flex-direction: column;
	gap: 30px;

	background-color: var(--white-color);
}

.agreement-form {
	width: 100%;

	background-color: var(--lt-color);
}
</style>
