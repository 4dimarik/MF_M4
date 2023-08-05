import { useOutletContext } from 'react-router-dom';
import categories from '../data/categories.json';
import List from '../components/List';
import moment from 'moment/moment';

export default function CategoryPage() {
  const { category, data } = useOutletContext();

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
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
        {categories[category]}
      </h2>
      <div className="w-[500px] m-auto mt-3">
        <List data={data} fields={fields} />
      </div>
    </div>
  );
}
