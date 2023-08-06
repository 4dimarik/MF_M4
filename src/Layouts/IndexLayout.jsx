import { Navigate, Outlet, useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import categories from '../data/categories.json';
import ErrorBoundary from '../ErrorBoundary';

export default function IndexLayout() {
  const { category } = useParams();

  const isValidCategory = Object.keys(categories).includes(category);

  return (
    <div className="container mx-auto">
      <Nav />
      <ErrorBoundary>
        {category ? (
          !isValidCategory ? (
            <Navigate to="/404" replace={true} />
          ) : (
            <Outlet context={{ category, endpoint: category }} />
          )
        ) : (
          <Outlet />
        )}
      </ErrorBoundary>
    </div>
  );
}
