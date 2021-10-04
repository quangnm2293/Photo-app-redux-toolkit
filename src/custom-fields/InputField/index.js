import PropTypes from 'prop-types';

InputField.propType = {
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	type: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
};

InputField.defaultProps = {
	type: 'text',
	label: '',
	placeholder: '',
	disabled: false,
};

function InputField({ field, type, form, label, placeholder, disabled }) {
	const { name, value } = field;
	const { errors, touched } = form;
	const showError = errors[name] && touched[name];
	return (
		<div className='flex flex-col'>
			{label && <label htmlFor={name}>{label}</label>}
			<input
				id={name}
				{...field}
				value={value}
				placeholder={placeholder}
				disabled={disabled}
				type={type}
				className='border border-gray-300 p-[6px] rounded-sm'
			/>

			{showError && <span className='text-red-500'>{errors[name]}</span>}
		</div>
	);
}

export default InputField;
