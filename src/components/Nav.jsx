import { NavLink } from 'react-router-dom';
import categories from '../data/categories.json';
import { HomeIcon } from '@heroicons/react/24/solid';
import AuthStatus from './AuthStatus';

export default function Nav() {
  const linkClass = (isActive) =>
    `text-md font-semibold leading-6 px-3 ${
      isActive ? 'text-blue-400' : 'text-gray-900'
    }`;
  return (
    <nav>
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-center py-3">
          <div className="flex space-x-4">
            <NavLink to="/" className={({ isActive }) => linkClass(isActive)}>
              <div className="flex items-center h-[100%]">
                <HomeIcon className="w-5 h-5 flex" />
              </div>
            </NavLink>

            {Object.keys(categories).map((item) => (
              <NavLink
                key={item}
                to={`/${item}`}
                className={({ isActive }) => linkClass(isActive)}
              >
                {categories[item]}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <AuthStatus />
        </div>
      </div>
    </nav>
  );
}
