<script setup lang="ts">
import { ref } from 'vue';

const signFormRef = ref(null);

const handleSignSubmit = async (value: unknown) => {
	console.log(value);
};

const handleOnSubmit = () => {
	// console.log(signFormRef.vaㅌ/lue.submit());
};
</script>

<template>
	<div class="signup-container">
		<h1>회원 가입</h1>
		<SignForm @submut="handleSignSubmit" ref="signFormRef" />
		<!-- <div class="agreement-form">dsds</div> -->
	</div>

	<SignupButton @click="handleOnSubmit" />
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

.agreement-form {
	width: 100%;

	background-color: var(--lt-color);
}
</style>
