import { useRoutes } from 'react-router-dom';
import IndexLayout from './Layouts/IndexLayout';
import CategoryPage from './pages/CategoryPage';
import MainPage from './pages/MainPage';
import CategoryItemPage from './pages/CategoryItemPage';
import NotFound from './pages/NotFound';
import './app.css';

function App() {
  const elements = useRoutes([
    {
      path: '/',
      element: <IndexLayout />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: ':category',
          element: <CategoryPage />,
          // children: [
          //   {
          //     path: ':id',
          //     element: <CategoryItemPage />,
          //   },
          // ],
        },
        {
          path: ':category/:id',
          element: <CategoryItemPage />,
        },
      ],
    },
    {
      path: '404',
      element: <NotFound />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return <>{elements}</>;
}

export default App;
