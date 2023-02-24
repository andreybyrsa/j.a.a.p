import { useSelector } from 'react-redux';
import { RootState } from '../store';

function useAuth() {
  const {name, email, id} = useSelector((state: RootState) => state.user);

  return {
    isAuth: !!id,
    name,
    email,
    id,
  };
}

export default useAuth;
