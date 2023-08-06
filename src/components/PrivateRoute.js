import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

export default function PrivateRoute({ children }) {
  const auth = useAuth();

  if (auth.user === null) {
    return <Navigate to="/login" />;
  }

  return children;
}
