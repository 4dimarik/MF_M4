import PropTypes from 'prop-types';

function RadioInput({ name, value, onChange, id, label, checked }) {
  id = `${name}-${value}-id`;

  return (
    <div className="flex items-center gap-x-3">
      <input
        id={id}
        name={name}
        type="radio"
        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
        onChange={onChange}
        value={value}
        checked={checked}
      />
      <label
        htmlFor={id}
        className="block text-base font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
    </div>
  );
}

RadioInput.defaultProps = {
  value: '',
  id: 'radio-input-id',
  label: '',
  checked: true,
};

RadioInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool,
};

export default RadioInput;
