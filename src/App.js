import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import './app.css';
import PrivateRoute from './components/PrivateRoute';
import IndexLayout from './layouts/IndexLayout';
import SuspenseComponent from './components/SuspenseComponent';

const MainPage = lazy(() => import('./pages/MainPage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const CategoryItemPage = lazy(() => import('./pages/CategoryItemPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

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
              <SuspenseComponent>
                <CategoryPage />
              </SuspenseComponent>
            </PrivateRoute>
          ),
        },
        {
          path: ':category/:id',
          element: (
            <PrivateRoute>
              <SuspenseComponent>
                <CategoryItemPage />
              </SuspenseComponent>
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: '/login',
      element: (
        <SuspenseComponent>
          <SignInPage />
        </SuspenseComponent>
      ),
    },
    {
      path: '404',
      element: (
        <SuspenseComponent>
          <NotFoundPage />
        </SuspenseComponent>
      ),
    },
    {
      path: '*',
      element: (
        <SuspenseComponent>
          <NotFoundPage />
        </SuspenseComponent>
      ),
    },
  ]);

  return <AuthProvider>{elements}</AuthProvider>;
}

export default App;
