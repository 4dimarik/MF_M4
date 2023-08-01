import './app.css';
import { useState } from 'react';
import Link from './components/Link';
import SignIn from './components/SignIn';

function App() {
  const [form, setForm] = useState('signIn');

  const handleFormView = (name) => setForm(name);

  const forms = {
    singIn: <SignIn />,
    singUp: <></>,
  };

  return (
    <main className="container mx-auto">
      <div className="max-w-[360px] pt-5 mx-auto">
        <div>
          {form === 'signIn' ? (
            'SignIn'
          ) : (
            <Link
              href="#signIn"
              onClick={() => handleFormView('signIn')}
              label="SignIn"
            />
          )}
          {` / `}
          {form === 'signUp' ? (
            'SignUp'
          ) : (
            <Link
              href="#signUp"
              onClick={() => handleFormView('signUp')}
              label="SignUp"
            />
          )}
        </div>
        <div className="p-5 bg-stone-300 rounded-md">{forms[form]}</div>
      </div>
    </main>
  );
}

export default App;
