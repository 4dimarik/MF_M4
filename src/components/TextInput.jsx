import PropTypes from 'prop-types';

const sizeList = ['xs', 'sm', 'base', 'lg', 'xl'];

const textSize = {
  xs: 'text-xs leading-4 [&>input]:rounded-sm',
  sm: 'text-sm leading-5 [&>.caption]:text-xs leading-4 [&>input]:rounded',
  base: 'text-base leading-6 [&>.caption]:text-sm leading-5 [&>input]:rounded-md',
  lg: 'text-lg leading-7 [&>.caption]:text-base leading-6 [&>input]:rounded-lg',
  xl: 'text-xl leading-8 [&>.caption]:text-lg leading-7 [&>input]:rounded-xl',
};

const pSize = {
  xs: 'px-1 py-1',
  sm: 'px-2 py-1',
  base: 'px-3 py-1',
  lg: 'px-4 py-1',
  xl: 'px-5 py-1',
};

const radiusSizes = {
  xs: 'rounded-sm',
  sm: 'rounded',
  base: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
};

function TextInput({
  placeholder,
  label,
  description,
  error,
  variant,
  radius,
  size,
  disabled,
  withAsterisk,
}) {
  const radiusSize = radius ? radiusSizes[radius] : '';

  const defaultInputClass = `border ${pSize[size]} ${radiusSize}`;

  const inputClass = {
    unstyle: '',
    default: defaultInputClass,
    filled: `bg-gray-400 ${defaultInputClass}`,
  };

  const asterisk = withAsterisk ? "after:content-['*'] after:ml-0.5" : '';

  return (
    <div className={`${textSize[size]}`}>
      {label && <label className={`font-bold ${asterisk}`}>{label}</label>}
      {description && <div className="caption">{description}</div>}
      <input
        placeholder={placeholder}
        className={`${inputClass[variant]} ${error ? 'border-red-500' : ''}`}
        disabled={disabled}
      />
      {error && <div className="caption text-red-600">{error}</div>}
    </div>
  );
}

TextInput.defaultProps = {
  placeholder: '',
  label: null,
  description: null,
  size: 'base',
  variant: 'default',
  disabled: false,
  radius: 'base',
  withAsterisk: false,
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  size: PropTypes.oneOf(sizeList),
  radius: PropTypes.oneOf(sizeList),
  variant: PropTypes.oneOf(['default', 'filled', 'unstyle']),
  disabled: PropTypes.bool,
  withAsterisk: PropTypes.bool,
};

export default TextInput;
