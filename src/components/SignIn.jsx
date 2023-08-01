import TextInput from './TextInput';
import { AtSymbolIcon } from '@heroicons/react/24/solid';

function SignIn() {
  return (
    <form className="[&>*:not(:first-child)]:mt-2">
      <TextInput
        placeholder={'myemail@mail.ru'}
        label={'Email'}
        description="Введите свой Email"
        error="Данные Email не зарегистрирован"
        withAsterisk={true}
        type="email"
        icon={<AtSymbolIcon />}
      />
      <TextInput label={'Пароль'} withAsterisk={true} type="password" />
    </form>
  );
}

export default SignIn;
