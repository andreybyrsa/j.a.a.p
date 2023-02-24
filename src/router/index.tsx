import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import IndexPage from '../pages/IndexPage';

const router = createBrowserRouter([
  {
    path: '',
    element: <LoginPage />,
  },
  {
    path: 'register',
    element: <RegisterPage />,
  },
  {
    path: 'index',
    element: <IndexPage />,
  }
]);

export default router;
