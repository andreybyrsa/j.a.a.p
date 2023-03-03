import { useEffect, useState } from 'react';
import PageLayout from '../../layout';
import Input from '../../components/Input';
import Button from '../../components/Button';
import AppLoader from '../../components/Loaders/AppLoader';
import Typography from '../../components/Typography';
import { NavLink } from 'react-router-dom';
import UserLoader from '../../components/Loaders/UserLoader';
import ErrorModal from '../../components/Modals/ErrorModal/ErrorModal';

import { setUser } from '../../store/reducers/user/UserReducer';
import { removeLoading } from '../../store/reducers/app/AppReducer';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';
import { getDatabase, ref, child, get } from 'firebase/database';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import './LoginPage.scss'
import { RootState } from '../../store';

function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const dispatch = useDispatch();

  const { name } = useAuth();
  const { loading } = useSelector((state: RootState) => state.app);

  useEffect(() => {
    setTimeout(() => {
      dispatch(removeLoading());
    }, 2450);
  }, [dispatch]);

  const onHandlerLogIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `user${user.uid}/userName`)).then((data) => {
          dispatch(setUser({
            name: data.val().userName,
            email: user.email,
            id: user.uid,
          }));
        }).catch(error => console.log(error));
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  if (name) {
    return <UserLoader user={name} />
  }

  if (loading) {
    return <AppLoader />
  }

  return (
    <PageLayout contentClassName="login-page">
      {error && (
        <ErrorModal
          error={error}
          setError={setError}
        />
      )}
      <Input
        type="email"
        value={email}
        setValue={setEmail}
        placeholder="Email"
      />
      <Input
        type="password"
        value={password}
        setValue={setPassword}
        placeholder="Password"
      />
      <Button onClick={onHandlerLogIn}>Login</Button>
      <div className="login-page__redirection">
        <Typography
          variant="text-t2"
          color="#6FBAF8"
        >
          Don't have an account?
        </Typography>
        <NavLink
          className="login-page__redirect-link"
          to="register"
        >
          Sign up
        </NavLink>
      </div>
    </PageLayout>
  );
}

export default LoginPage;
