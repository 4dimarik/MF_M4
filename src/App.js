import { useState } from 'react';
import './app.css';

function App() {
  const [form, setForm] = useState('singIn');

  const handleFormView = (name) => setForm(name);

  console.log(form);

  return (
    <main className="container mx-auto">
      <div className="max-w-[500px] pt-5 mx-auto">
        <div>
          <a
            href="#singUp"
            onClick={() => handleFormView('singIn')}
            className="underline text-sky-500 hover:text-sky-800"
          >
            SingIn
          </a>
          {` / `}
          <a
            href="#singUp"
            onClick={() => handleFormView('singUp')}
            className="underline text-sky-500 hover:text-sky-800"
          >
            SingUp
          </a>
        </div>
      </div>
    </main>
  );
}

export default App;
