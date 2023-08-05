import { useNavigate } from 'react-router-dom';

export default function ButtonBack() {
  const navigate = useNavigate();
  return (
    <a
      href="#"
      onClick={() => navigate(-1)}
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Назад
    </a>
  );
}
