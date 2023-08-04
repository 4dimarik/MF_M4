import { NavLink } from 'react-router-dom';
import categories from '../data/categories.json';

export default function Nav() {
  const linkClass = ' text-sm font-semibold leading-6';
  return (
    <nav
      className="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="lg:flex lg:gap-x-12">
        {Object.keys(categories).map((item) => (
          <NavLink
            key={item}
            to={`/${item}`}
            className={({ isActive }) =>
              isActive
                ? `${linkClass}  text-yellow-500`
                : `${linkClass} text-gray-900`
            }
          >
            {categories[item]}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
