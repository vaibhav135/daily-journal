import * as Yup from 'Yup';

declare module 'yup' {
	interface StringSchema extends Yup.StringSchema {
		isValidUserOrEmail(): this;
	}
}
