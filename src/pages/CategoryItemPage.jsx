import { useOutletContext, useParams } from 'react-router-dom';
import moment from 'moment';
import ButtonBack from '../components/ButtonBack';

const getValue = (fieldName, value) => {
  switch (fieldName) {
    case 'created':
      return moment(value).format('YYYY-MM-DD HH:mm');
    default:
      return value;
  }
};

export default function CategoryItemPage() {
  const { id } = useParams();
  const { data } = useOutletContext();

  const obj = data.find((item) => item?.id.toString() === id.toString());

  return (
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
                <span>{getValue(item, obj[item])}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-100 flex justify-end">
        <ButtonBack />
      </div>
    </>
  );
}
