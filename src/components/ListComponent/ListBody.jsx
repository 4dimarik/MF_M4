import React from 'react';
import PropTypes from 'prop-types';

function ListBody({ data, fields, handleClick, lastNodeRef }) {
  return data.map((item, idx) => (
    <div
      key={item?.id}
      ref={data.length === idx + 1 ? lastNodeRef : null}
      className="l-item"
      data-id={item?.id}
      onClick={handleClick}
    >
      <div>{idx + 1}</div>
      {Object.keys(fields).map((fieldName, idx) => (
        <div key={idx}>{fields[fieldName].value(item[fieldName])}</div>
      ))}
    </div>
  ));
}

ListBody.propTypes = {
  data: PropTypes.array.isRequired,
  fields: PropTypes.object.isRequired,
  handleClick: PropTypes.func,
};

export default ListBody;
