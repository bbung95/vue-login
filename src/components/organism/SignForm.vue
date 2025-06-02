<script setup lang="ts">
import { Field } from 'vee-validate';

const props = defineProps<{ value: unknown }>();

console.log(props.value);
</script>

<template>
	<div class="signup-form">
		<Field name="id" v-slot="{ field, errorMessage, meta }" :validateOnChange="false">
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
				type="password"
				v-bind="field"
				placeholder="비밀번호 입력"
				:error-message="errorMessage"
				:is-error="!!errorMessage && !meta.valid"
			/>
		</Field>
		<Field name="confirm_password" v-slot="{ field, errorMessage, meta }">
			<InputForm
				class="confirm-password"
				type="password"
				v-bind="field"
				placeholder="비밀번호 확인"
				:error-message="errorMessage"
				:is-error="!!errorMessage && !meta.valid"
			/>
		</Field>
	</div>
</template>

<style lang="scss" scoped>
.signup-form {
	max-width: 610px;
	width: 100%;

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

@media (max-width: 578px) {
	.signup-form {
		& > div {
			margin-top: 20px;
		}
	}
}
</style>
