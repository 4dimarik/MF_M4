import PropTypes from 'prop-types';

function RadioInputGroup({ children, label }) {
  return (
    <fieldset>
      <legend className="text-base font-bold leading-6 text-gray-900">
        {label}
      </legend>
      {children}
    </fieldset>
  );
}

RadioInputGroup.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
};

export default RadioInputGroup;
