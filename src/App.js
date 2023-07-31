import './app.css';
import { useState } from 'react';
import Link from './components/Link';

function App() {
  const [form, setForm] = useState('singIn');

  const handleFormView = (name) => setForm(name);

  console.log(form);

  return (
    <main className="container mx-auto">
      <div className="max-w-[500px] pt-5 mx-auto">
        <div>
          <Link
            href="#singIp"
            onClick={() => handleFormView('singIn')}
            label="SingIn"
          />
          {` / `}
          <Link
            href="#singUp"
            onClick={() => handleFormView('singUp')}
            label="SingUp"
          />
        </div>
      </div>
    </main>
  );
}

export default App;
