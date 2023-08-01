// import React from 'react';
import PropTypes from 'prop-types';

const sizeList = ['xs', 'sm', 'base', 'lg', 'xl'];

const textSize = {
  xs: 'text-xs leading-4 [&>input]:rounded-sm',
  sm: 'text-sm leading-5 [&>.caption]:text-xs leading-4 [&>input]:rounded',
  base: 'text-base leading-6 [&>.caption]:text-sm leading-5 [&>input]:rounded-md',
  lg: 'text-lg leading-7 [&>.caption]:text-base leading-6 [&>input]:rounded-lg',
  xl: 'text-xl leading-8 [&>.caption]:text-lg leading-7 [&>input]:rounded-xl',
};

const pxSizes = {
  xs: 1,
  sm: 2,
  base: 3,
  lg: 4,
  xl: 5,
};

const radiusSizes = {
  xs: 'rounded-sm',
  sm: 'rounded',
  base: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
};

function TextInput({
  type,
  placeholder,
  label,
  description,
  error,
  variant,
  radius,
  size,
  disabled,
  withAsterisk,
  icon,
}) {
  // Динамический класс для радиуса границ (input)
  const radiusSize = radius ? radiusSizes[radius] : '';
  // Динамический класс для padding по оси x (input)
  const pxSize = `px-${pxSizes[size]}`;

  // Динамический классы для стилизации (input) вариант Default
  const defaultInputClass = `w-[100%] align-middle border border-2 py-1 ${pxSize} ${
    icon && 'pl-7'
  } ${radiusSize} ${error ? 'border-red-500' : 'border-gray-400'}`;

  // массив классов для вариантов стилизации (input)
  const inputClass = {
    unstyle: 'w-[100%]',
    default: defaultInputClass,
    filled: `bg-gray-400 ${defaultInputClass}`,
  };

  // Классы для звездочки
  const asterisk = withAsterisk ? "after:content-['*'] after:ml-0.5" : '';

  return (
    <div className={`${textSize[size]}`}>
      {label && (
        <label className={`block font-bold ${asterisk}`}>{label}</label>
      )}
      {description && <div className="caption">{description}</div>}
      <div className="relative">
        {icon && (
          <div className="flex items-center absolute h-[100%] ml-1">
            <div className="h-5 w-5 text-gray-400">{icon}</div>
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`${inputClass[variant]} `}
          disabled={disabled}
        />
      </div>

      {error && <div className="caption text-red-600">{error}</div>}
    </div>
  );
}

TextInput.defaultProps = {
  type: 'text',
  placeholder: '',
  label: null,
  description: null,
  size: 'base',
  variant: 'default',
  disabled: false,
  radius: 'base',
  withAsterisk: false,
  icon: null,
};

TextInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  size: PropTypes.oneOf(sizeList),
  radius: PropTypes.oneOf(sizeList),
  variant: PropTypes.oneOf(['default', 'filled', 'unstyle']),
  disabled: PropTypes.bool,
  withAsterisk: PropTypes.bool,
  icon: PropTypes.object,
};

export default TextInput;
