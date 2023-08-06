import { useRoutes } from 'react-router-dom';
import IndexLayout from './Layouts/IndexLayout';
import CategoryPage from './pages/CategoryPage';
import MainPage from './pages/MainPage';
import CategoryItemPage from './pages/CategoryItemPage';
import NotFound from './pages/NotFound';
import { AuthProvider } from './context/AuthProvider';
import './app.css';
import SignInPage from './pages/SignInPage';
import PrivateRoute from './components/PrivateRoute';

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
          element: (
            <PrivateRoute>
              <CategoryPage />
            </PrivateRoute>
          ),
        },
        {
          path: ':category/:id',
          element: (
            <PrivateRoute>
              <CategoryItemPage />
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: '/login',
      element: <SignInPage />,
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
