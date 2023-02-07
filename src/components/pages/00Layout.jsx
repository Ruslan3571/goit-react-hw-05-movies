import { Outlet } from 'react-router-dom';
import { AppBar } from './01AppBar';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};
