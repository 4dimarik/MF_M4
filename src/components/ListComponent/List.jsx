import { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ListHeader, ListBody } from './index';
import './list.css';

function List({ data, fields, handleOpenItemDetails, infinitiScroll }) {
  const [itemList, setItemList] = useState([]);

  const { isLoading, hasMore, setPageNum } = infinitiScroll;
  const [sort, setSort] = useState({
    type: 'asc',
    func: undefined,
  });

  useEffect(() => {
    setItemList((prevState) => [...prevState, ...data]);
  }, [data]);

  const toggleSort = (fieldName) => {
    const type = sort.type === 'asc' ? 'desc' : 'asc';
    const func = fields[fieldName].sort[type];
    setSort({ type, func });
  };

  const handleClick = ({ currentTarget }) => {
    const id = currentTarget.dataset?.id;
    if (id) handleOpenItemDetails(id);
  };

  const observer = useRef();
  const lastNodeRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log('###: VISIBLE');
          setPageNum((prevState) => prevState + 1);
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, hasMore, setPageNum]
  );

  data = data.sort(sort.func);

  return (
    <div className="my-list">
      {fields && (
        <ListHeader fields={fields} handleSort={toggleSort} sort={sort} />
      )}
      {itemList && (
        <ListBody
          data={itemList}
          fields={fields}
          handleClick={handleClick}
          lastNodeRef={lastNodeRef}
        />
      )}
    </div>
  );
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  fields: PropTypes.object.isRequired,
  handleOpenItemDetails: PropTypes.func,
  infinitiScroll: PropTypes.object,
};

export default List;
