import { Home } from '../components/pages/Home';
import { Page404 } from '../components/pages/Page404';
import { Settings } from '../components/pages/Settings';
import { UserManagement } from '../components/pages/UserManagement';

export const homeRoutes = [
  {
    path: '/',
    exact: true,
    children: <Home />,
  },
  {
    path: '/user_management',
    exact: false,
    children: <UserManagement />,
  },
  {
    path: '/settings',
    exact: false,
    children: <Settings />,
  },
  {
    path: '*',
    exact: false,
    children: <Page404 />,
  },
];
