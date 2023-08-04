import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

export default function IndexLayout() {
  return (
    <div className="container mx-auto">
      <Nav />
      <Outlet />
    </div>
  );
}
