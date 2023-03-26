import { FieldConfig } from 'formik';

export type CustomFieldHookConfig<
	T,
	U extends 'input' | 'select' | 'textarea'
> = JSX.IntrinsicElements[U] & FieldConfig<T>;
