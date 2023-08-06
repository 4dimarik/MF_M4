import { useState } from 'react';
import TextInput from './TextInput';
import { useAuth } from '../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

function SignIn() {
  const [data, setData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    let isValidForm = true;
    if (data?.username !== 'test') {
      setErrors((prevState) => ({
        ...prevState,
        username: 'Данный Логин не зарегистрирован',
      }));
      isValidForm = false;
    }
    if (data?.password !== 'test123') {
      setErrors((prevState) => ({
        ...prevState,
        password: 'Пароль неверный',
      }));
      isValidForm = false;
    }
    console.log(location);
    if (isValidForm)
      auth.signin(data?.username, () => {
        navigate(from, { replace: true });
      });
  };

  return (
    <form className="[&>*:not(:first-child)]:mt-2" onSubmit={handleSubmit}>
      <TextInput
        name="username"
        value={data?.username}
        onChange={handleChange}
        description="Логин - test"
        label={'Логин'}
        withAsterisk={true}
        error={errors?.username}
      />
      <TextInput
        name="password"
        value={data?.password}
        onChange={handleChange}
        label={'Пароль'}
        description="Пароль - test123"
        withAsterisk={true}
        type="password"
        error={errors?.password}
      />
      <div className="w-100 m-auto">
        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Войти
        </button>
      </div>
    </form>
  );
}

export default SignIn;
