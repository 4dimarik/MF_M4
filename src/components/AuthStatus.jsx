import { useAuth } from '../context/AuthProvider';
import {
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

export default function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSignIn = () => {
    console.log('handleSignIn');
  };

  const handleSignOut = () => {
    auth.signout(() => navigate('/'));
  };

  return (
    <>
      {auth.user ? (
        (auth.user,
        (<ArrowRightOnRectangleIcon className="w-5 h-5 cursor-pointer" />))
      ) : (
        <ArrowLeftOnRectangleIcon
          className="w-5 h-5 hover:cursor-pointer"
          onClick={handleSignIn}
        />
      )}
    </>
  );
}
