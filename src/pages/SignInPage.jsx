import SignIn from '../components/SignIn';

export default function SignInPage() {
  return (
    <div className="container m-auto h-[100vh] flex items-center">
      <div className="flex max-w-sm m-auto flex-wrap">
        <div className="w-full py-3">
          <img className="w-full" src="./Rick-And-Morty-Logo.png" />
        </div>
        <div className="w-full my-10 mt-3 py-3 text-5xl font-bold text-center">
          Вход
        </div>
        <div className="flex-1">
          <SignIn />
        </div>
      </div>
    </div>
  );
}
