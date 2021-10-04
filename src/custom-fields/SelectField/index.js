import PropTypes from 'prop-types';
import Select from 'react-select';

SelectField.propType = {
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,

	options: PropTypes.array,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
};

SelectField.defaultProps = {
	options: [],
	label: '',
	placeholder: '',
	disabled: false,
};

function SelectField({ field, options, form, label, placeholder, disabled }) {
	const { name, value } = field;
	const selectedOption = options.find(opt => opt.value === value);

	const { errors, touched } = form;
	const showError = errors[name] && touched[name];

	const handleSelectedOptionChange = selectedOption => {
		const selectedValue = selectedOption ? selectedOption.value : selectedOption;

		const changeEvent = {
			target: {
				name: name,
				value: selectedValue,
			},
		};
		field.onChange(changeEvent);
	};

	return (
		<div className='flex flex-col'>
			{label && <label htmlFor={name}>{label}</label>}
			<Select
				id={name}
				{...field}
				value={selectedOption}
				onChange={handleSelectedOptionChange}
				placeholder={placeholder}
				disabled={disabled}
				options={options}
			/>
			{showError && <span className='text-red-500'>{errors[name]}</span>}
		</div>
	);
}

export default SelectField;
