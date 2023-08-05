import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, { setItem, removeItem }] = useLocalStorage('token');

  const signin = (newUser, callback) => {
    setItem(newUser);
    callback();
  };

  const signout = (newUser, callback) => {
    setItem(null);
    callback();
  };

  const value = {
    user,
    signin,
    signout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
