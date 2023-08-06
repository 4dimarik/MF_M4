import { useOutletContext, useNavigate, useLocation } from 'react-router-dom';
import categories from '../data/categories.json';
import List from '../components/ListComponent';
import moment from 'moment/moment';
import Loader from '../components/Loader';
import { useFetch } from '../hooks/useFetch';
import { useState, useEffect } from 'react';

export default function CategoryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { category, endpoint } = useOutletContext();
  const [pageNum, setPageNum] = useState(1);
  const { data, isLoading, error, refetch } = useFetch(
    'https://rickandmortyapi.com/api/' + endpoint,
    { params: { page: 1 } }
  );

  useEffect(() => {
    if (pageNum > 1) {
      console.log('Change pageNum: ', pageNum);
      refetch({
        params: {
          page: pageNum,
        },
      });
    }
  }, [pageNum]);

  const results = data?.results;
  const hasMore = data?.info.pages !== pageNum;

  const handleOpenItemDetails = (id) => {
    navigate(`${location.pathname}/${id}`);
  };

  const fields = {
    name: {
      name: 'name',
      label: 'Name',
      value: (value) => value,
      sort: null,
    },
    created: {
      name: 'created',
      label: 'Created',
      value: (value) => moment(value).format('YYYY-MM-DD HH:mm'),
      sort: {
        asc: (a, b) => {
          return moment(a.created).unix() - moment(b.created).unix();
        },
        desc: (a, b) => {
          return moment(b.created).unix() - moment(a.created).unix();
        },
      },
    },
  };
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
        {categories[category]}
      </h2>
      <div className="w-[80%] m-auto mt-3">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <div>Ошибка. Повторите попытку позже.</div>
        ) : (
          <List
            data={results}
            fields={fields}
            handleOpenItemDetails={handleOpenItemDetails}
            infinitiScroll={{
              isLoading,
              hasMore,
              setPageNum,
            }}
          />
        )}
      </div>
    </>
  );
}
