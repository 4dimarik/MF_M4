import { useAuth } from '../context/AuthProvider';
import {
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth.signout(() => navigate('/'));
  };

  return (
    <>
      {auth.user ? (
        (auth.user,
        (<ArrowRightOnRectangleIcon className="w-5 h-5 cursor-pointer" onClick={handleSignOut} />))
      ) : (
        <ArrowLeftOnRectangleIcon
          className="w-5 h-5 hover:cursor-pointer"
          onClick={() => navigate('/login')}
        />
      )}
    </>
  );
}
