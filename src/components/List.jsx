import PropTypes from 'prop-types';

function List({ data, fields }) {
  return (
    <div className="my-list">
      <div className="l-item">
        <div>#</div>
        {fields &&
          fields.map((item, idx) => <div key={idx}>{item?.label}</div>)}
      </div>
      {data &&
        data.map((item, idx) => (
          <div key={item?.id} className="l-item">
            <div>{idx + 1}</div>
            {fields.map((field, idx) => (
              <div key={idx}>{item[field.name]}</div>
            ))}
          </div>
        ))}
    </div>
  );
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  fields: PropTypes.array.isRequired,
};

export default List;
