import { useState } from 'react';
import TextInput from './TextInput';
import { AtSymbolIcon } from '@heroicons/react/24/solid';

function SignIn() {
  const [data, setData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form className="[&>*:not(:first-child)]:mt-2" onSubmit={handleSubmit}>
      <TextInput
        name="email"
        value={data?.email}
        onChange={handleChange}
        placeholder={'myemail@mail.ru'}
        label={'Email'}
        description="Введите свой Email"
        error="Данные Email не зарегистрирован"
        withAsterisk={true}
        type="email"
        icon={<AtSymbolIcon />}
      />
      <TextInput
        name="password"
        value={data?.password}
        onChange={handleChange}
        label={'Пароль'}
        withAsterisk={true}
        type="password"
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
