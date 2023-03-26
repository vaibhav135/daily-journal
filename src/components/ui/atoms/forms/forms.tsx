import classNames from 'classnames';
import { useField } from 'formik';
import { FC } from 'react';
import { CustomFieldHookConfig } from './types';

export const Input: FC<CustomFieldHookConfig<string, 'input'>> = ({
	...fieldProps
}) => {
	// Hooks.
	const [field, meta] = useField(fieldProps);

	// Custom classname.
	const className = classNames(['input-text']);

	return (
		<div className="">
			<input className={className} {...field} {...fieldProps} />
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</div>
	);
};

export const Label: FC<{ label: string }> = ({ label }) => {
	return <label className=""> {label} </label>;
};
