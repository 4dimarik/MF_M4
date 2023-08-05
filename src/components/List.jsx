import { useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowLongDownIcon, ArrowLongUpIcon } from '@heroicons/react/24/solid';
import { useNavigate, useLocation } from 'react-router-dom';

const sortIcons = {
  asc: <ArrowLongUpIcon className="h-4 w-4 inline-block ml-1" />,
  desc: <ArrowLongDownIcon className="h-4 w-4 inline-block ml-1" />,
};

function List({ data, fields }) {
  const [sort, setSort] = useState({
    type: 'asc',
    func: undefined,
  });
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSort = (fieldName) => {
    const type = sort.type === 'asc' ? 'desc' : 'asc';
    const func = fields[fieldName].sort[type];
    setSort({ type, func });
  };

  const handleClick = ({ currentTarget }) => {
    const id = currentTarget.dataset?.id;
    if (id) console.log('redirect');
    if (id) navigate(`${location.pathname}/${id}`);
  };

  data = data.sort(sort.func);

  return (
    <div className="my-list">
      <div className="l-item">
        <div>#</div>
        {fields &&
          Object.keys(fields).map((fieldName, idx) => (
            <div key={idx}>
              {fields[fieldName]?.label}
              {fields[fieldName]?.sort && (
                <span
                  className="hover:cursor-pointer"
                  onClick={() => toggleSort(fieldName)}
                >
                  {sortIcons[sort.type]}
                </span>
              )}
            </div>
          ))}
      </div>
      {data &&
        data.map((item, idx) => (
          <div
            key={item?.id}
            className="l-item"
            data-id={item?.id}
            onClick={handleClick}
          >
            <div>{idx + 1}</div>
            {Object.keys(fields).map((fieldName, idx) => (
              <div key={idx}>{fields[fieldName].value(item[fieldName])}</div>
            ))}
          </div>
        ))}
    </div>
  );
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  fields: PropTypes.object.isRequired,
};

export default List;
