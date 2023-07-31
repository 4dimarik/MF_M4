import './app.css';
import { useState } from 'react';
import Link from './components/Link';
import TextInput from './components/TextInput';

function App() {
  const [form, setForm] = useState('singIn');

  const handleFormView = (name) => setForm(name);

  console.log(form);

  return (
    <main className="container mx-auto">
      <div className="max-w-[500px] pt-5 mx-auto">
        <div>
          {form === 'singIn' ? (
            'SingIn'
          ) : (
            <Link
              href="#singIn"
              onClick={() => handleFormView('singIn')}
              label="SingIn"
            />
          )}
          {` / `}
          {form === 'singUp' ? (
            'SingUp'
          ) : (
            <Link
              href="#singUp"
              onClick={() => handleFormView('singUp')}
              label="SingUp"
            />
          )}
        </div>
        <div>
          <TextInput
            placeholder={'123'}
            label={'Name'}
            description="Какой то описание"
            error="asdkljsdksjd"
            withAsterisk={false}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
