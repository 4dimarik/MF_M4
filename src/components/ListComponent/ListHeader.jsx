import PropTypes from 'prop-types';
import { ArrowLongDownIcon, ArrowLongUpIcon } from '@heroicons/react/24/solid';

const sortIcons = {
  asc: <ArrowLongUpIcon className="h-4 w-4 inline-block ml-1" />,
  desc: <ArrowLongDownIcon className="h-4 w-4 inline-block ml-1" />,
};

function ListHeader({ fields, sort, handleSort }) {
  return (
    <div className="l-item">
      <div>#</div>
      {Object.keys(fields).map((fieldName, idx) => (
        <div key={idx}>
          {fields[fieldName]?.label}
          {fields[fieldName]?.sort && (
            <span
              className="hover:cursor-pointer"
              onClick={() => handleSort(fieldName)}
            >
              {sortIcons[sort.type]}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

ListHeader.propTypes = {
  fields: PropTypes.object.isRequired,
  sort: PropTypes.object,
  handleSort: PropTypes.func,
};

export default ListHeader;
