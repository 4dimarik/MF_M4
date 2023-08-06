import { NavLink, useOutletContext, useParams } from 'react-router-dom';
import moment from 'moment';
import ButtonBack from '../components/ButtonBack';
import { useFetch } from '../hooks/useFetch';

const getValue = (fieldName, value, category) => {
  switch (fieldName) {
    case 'created':
      return moment(value).format('YYYY-MM-DD HH:mm');
    case 'residents':
    case 'characters':
    case 'episode':
      return null;
    case 'location':
    case 'origin': {
      if (value.name !== 'unknown') {
        const urlParts = value.url.split('/');
        const to = `/${urlParts[urlParts.length - 2]}/${
          urlParts[urlParts.length - 1]
        }`;
        return (
          <NavLink to={to} className="underline hover:text-blue-300">
            {value.name}
          </NavLink>
        );
      } else {
        return value.name;
      }
    }
    default:
      return value;
  }
};

export default function CategoryItemPage() {
  const { id } = useParams();
  const { category, endpoint } = useOutletContext();

  const {
    data: obj,
    isLoading,
    error,
    refetch,
  } = useFetch('https://rickandmortyapi.com/api/' + endpoint + `/${id}`);

  return (
    !isLoading && (
      <>
        <div className="flex">
          {obj?.image && (
            <div>
              <img src={obj.image} />
            </div>
          )}
          <div className="flex-1 p-3">
            <ul>
              {Object.keys(obj).map((item) => (
                <li key={item}>
                  <span className="font-bold uppercase mr-2">{item}:</span>
                  <span>{getValue(item, obj[item], category)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-100 flex justify-end">
          <ButtonBack />
        </div>
      </>
    )
  );
}
