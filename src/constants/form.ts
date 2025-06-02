export const ID_REGEX = /^[a-zA-Z0-9]*$/;
export const PASSWORD_REGEX = /^[a-zA-Z0-9!@#$%^&*()]*$/;
export const PHONE_REGEX = /^010[-]?\d{3,4}[-]?\d{4}$/;

export const SIGNUP_MESSAGE = {
	ID: '8 ~ 16자의 영문, 숫자만 사용 가능합니다.',
	PHONE: '올바른 휴대전화 번호 형식이 아닙니다.',
	EMAIL: '올바른 이메일 형식이어야 합니다.',
	PASSWORD: '8 ~ 16자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
	PASSWORD_COMFIRM: '비밀번호가 일치하지 않습니다.',
} as const;
