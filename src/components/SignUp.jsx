import { useState } from 'react';
import TextInput from './TextInput';
import { AtSymbolIcon } from '@heroicons/react/24/solid';
import RadioInput from './RadioInput';
import RadioInputGroup from './RadioInputGroup';

export default function SignUp() {
  const [data, setData] = useState({
    name: '',
    nickname: '',
    email: '',
    gender: 'male',
    password: '',
    passwordConfirmation: '',
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form className="[&>*:not(:first-child)]:mt-2" onSubmit={handleSubmit}>
      <TextInput
        name="name"
        value={data?.name}
        onChange={handleChange}
        placeholder={'Дмитрий'}
        label={'Имя'}
        withAsterisk={true}
      />
      <TextInput
        name="nickname"
        value={data?.nickname}
        onChange={handleChange}
        placeholder={'dimarik'}
        label={'Ник'}
      />
      <TextInput
        name="email"
        value={data?.email}
        onChange={handleChange}
        placeholder={'myemail@mail.ru'}
        label={'Email'}
        description="Введите свой Email"
        error="Данные Email уже зарегистрирован"
        withAsterisk={true}
        type="email"
        icon={<AtSymbolIcon />}
      />
      <RadioInputGroup label="Пол">
        <RadioInput
          name="gender"
          value="male"
          label="Мужской"
          onChange={handleChange}
          checked={data?.gender === 'male'}
        />
        <RadioInput
          name="gender"
          value="female"
          label="Женский"
          onChange={handleChange}
          checked={data?.gender === 'female'}
        />
      </RadioInputGroup>
      <TextInput
        name="password"
        value={data?.password}
        onChange={handleChange}
        label={'Пароль'}
        withAsterisk={true}
        type="password"
      />
      <TextInput
        name="passwordConfirmation"
        value={data?.passwordConfirmation}
        onChange={handleChange}
        label={'Повторите пароль'}
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
