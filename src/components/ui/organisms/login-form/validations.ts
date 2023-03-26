import { string, object, addMethod } from 'yup';

import { validationErrors } from '@utils/errors';

addMethod(string, 'isValidUserOrEmail', function () {
	return this.test('isValidUserOrEmail', async (value, context) => {
		if (value && value.length >= 4 && value.endsWith('.com')) {
			return (await this.email().isValid(value))
				? true
				: context.createError({ message: validationErrors.INVALID_EMAIL });
		}
		return (await this.max(20).isValid(value))
			? true
			: context.createError({ message: validationErrors.MAX_CHAR_LENGTH });
	});
});

export const loginFormSchema = object().shape({
	userOrEmail: string().isValidUserOrEmail().required('Required'),
	password: string()
		.max(30, validationErrors.MAX_CHAR_LENGTH(30))
		.required('Required'),
});
