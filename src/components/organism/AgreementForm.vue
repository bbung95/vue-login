<script setup lang="ts">
import { Field } from 'vee-validate';
</script>

<template>
	<section class="agreement-form">
		<article class="article-group">
			<h2 class="title">마케팅 정보 수신</h2>
			<div class="info-box">
				<Field name="email-allow" v-slot="{ field }" type="checkbox" :value="true" :unchecked-value="false">
					<label class="input-checkbox" for="email-allow">
						<input id="email-allow" v-bind="field" type="checkbox" :value="true" />
						이메일 수신 동의
					</label>
				</Field>
				<Field name="sms-allow" v-slot="{ field }" type="checkbox" :value="true" :unchecked-value="false">
					<label class="input-checkbox" for="sms-allow">
						<input id="sms-allow" v-bind="field" type="checkbox" :value="true" />
						SMS 문자 수신 동의
					</label>
				</Field>
				<Field name="call-allow" v-slot="{ field }" type="checkbox" :value="true" :unchecked-value="false">
					<label class="input-checkbox" for="call-allow">
						<input id="call-allow" v-bind="field" type="checkbox" :value="true" />
						TM (전화 수신) 동의
					</label>
				</Field>
			</div>
			<p class="description">
				노아솔루션 뉴스레터 발송, 서비스 안내 및 프로모션, 이벤트 해택 정보를 만나보실 수 있습니다.
			</p>
		</article>

		<article class="article-group">
			<h1 class="title">약관 동의</h1>
			<div class="info-box">
				<div class="terms-item">서비스 이용 약관 <a href="#">보기</a></div>
				<div class="terms-item">개인정보 수집 및 이용 <a href="#">보기</a></div>
			</div>
			<p class="description">
				개인정보 수집 이용에 동의하지 않을 수 있으며, 동의르르 거부할 경우 서비스 이용에 제한이 있을 수 있습니다.
			</p>
		</article>
	</section>
</template>

<style lang="scss" scoped>
.agreement-form {
	width: 100%;

	background-color: var(--lt-color);
}

.article-group {
	margin: 80px 0;

	& > .title {
		margin: 0 0 40px 0;

		color: var(--black-color);
		font-size: 2.4rem;
		font-family: 600;
		line-height: 2.4rem;
	}

	& > .info-box {
		display: flex;
		flex-direction: column;
	}

	& > .description {
		padding-left: 18px;

		position: relative;

		color: var(--gray-color-500);
		font-size: 1.8rem;
		font-weight: 400;
		letter-spacing: 0.5px;
		line-height: 2.7rem;

		&::before {
			content: '*';
			position: absolute;

			top: 2px;
			left: 0;
		}
	}
}

.input-checkbox {
	height: 54px;

	padding-left: 2.5px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: start;
	gap: 13.5px;

	color: var(--black-color);
	font-size: 2rem;
	font-weight: 400;
	line-height: 2rem;

	& > input {
		width: 25px;
		height: 25px;
	}
}

.terms-item {
	height: 54px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 13.5px;

	color: var(--black-color);
	font-size: 2rem;
	font-weight: 400;
	line-height: 2rem;

	& > a {
		color: var(--primary-color);
		font-size: 2rem;
		font-weight: 500;
		line-height: 2.4rem;
	}
}
</style>
