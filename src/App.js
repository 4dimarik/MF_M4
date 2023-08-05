import { useRoutes } from 'react-router-dom';
import IndexLayout from './Layouts/IndexLayout';
import CategoryPage from './pages/CategoryPage';
import MainPage from './pages/MainPage';
import CategoryItemPage from './pages/CategoryItemPage';
import NotFound from './pages/NotFound';
import { AuthProvider } from './context/AuthProvider';
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

  return <AuthProvider>{elements}</AuthProvider>;
}

export default App;
