<script setup lang="ts">
import { ref, watch } from 'vue';

const inputText = ref('');

watch(inputText, () => {
	console.log(inputText.value);
});
</script>

<template>
	<div class="signup-container">
		<h1 class="signup-title">회원 가입</h1>
		<AtomInput v-model="inputText" placeholder="아이디 입력" :isDisabled="false" />
	</div>
</template>

<style lang="scss" scoped>
.signup-container {
	max-width: 570px;
	width: 100%;

	margin: 0 auto;
}

.signup-title {
	margin: 0;

	font-size: 40px;
}
</style>
