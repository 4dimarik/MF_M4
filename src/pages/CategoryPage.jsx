import { useOutletContext } from 'react-router-dom';
import categories from '../data/categories.json';
import List from '../components/List';

export default function CategoryPage() {
  const { category, data } = useOutletContext();

  const fields = [
    {
      name: 'name',
      label: 'Name',
    },
    {
      name: 'created',
      label: 'Created',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
        {categories[category]}
      </h2>
      <div className="w-[400px] m-auto mt-3">
        <List data={data} fields={fields} />
      </div>
    </div>
  );
}
