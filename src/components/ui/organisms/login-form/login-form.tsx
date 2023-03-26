import { signIn } from 'next-auth/react';
import { Form, Formik } from 'formik';
import { InferType } from 'yup';
import { Button, Input as InputField } from '../../atoms';
import { loginFormSchema } from './validations';

export type LoginFormType = InferType<typeof loginFormSchema>;

const loginFormInitialValue: LoginFormType = {
	userOrEmail: '',
	password: '',
};

export const LoginForm = () => {
	// Handlers
	const onSubmitLoginForm = () => {
		return;
	};

	return (
		<div>
			<Formik
				initialValues={loginFormInitialValue}
				validationSchema={loginFormSchema}
				onSubmit={onSubmitLoginForm}
			>
				<Form>
					<InputField
						name="userOrEmail"
						type="text"
						placeholder="username or email"
						required
					/>
					<InputField
						name="password"
						type="password"
						placeholder="password"
						required
					/>
					<Button text="Sign in" />

					<Button
						text="Sign in with google"
						onClick={() => signIn('google', { callbackUrl: '/home' })}
					/>
				</Form>
			</Formik>
		</div>
	);
};
