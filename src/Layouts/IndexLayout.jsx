import { Navigate, Outlet, useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import categories from '../data/categories.json';
import characters from '../data/characters.json';
import episodes from '../data/episode.json';
import location from '../data/location.json';

const categoriesData = {
  characters,
  episodes,
  location,
};

export default function IndexLayout() {
  const { category } = useParams();

  const isValidCategory = Object.keys(categories).includes(category);

  return (
    <div className="container mx-auto">
      <Nav />
      {category ? (
        !isValidCategory ? (
          <Navigate to="/404" replace={true} />
        ) : (
          <Outlet context={{ category, data: categoriesData[category] }} />
        )
      ) : (
        <Outlet />
      )}
    </div>
  );
}
