import { useEffect, useState } from 'react';
import PageLayout from '../../layout';
import Input from '../../components/Input';
import Button from '../../components/Button';
import AppLoader from '../../components/Loaders/AppLoader';
import Typography from '../../components/Typography';
import { NavLink } from 'react-router-dom';
import UserLoader from '../../components/Loaders/UserLoader';

import { setUser } from '../../store/reducers/user/UserReducer';
import { useDispatch } from 'react-redux';
import useAuth from '../../hooks/useAuth';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import './LoginPage.scss'

function LoginPage() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useDispatch()

  const { name } = useAuth()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2450);
  }, [])

  const onHandlerLogIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
          name: name,
          email: user.email,
          id: user.uid,
        }));
      })
      .catch((error) => {
        console.log(error)
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
          If you don't have an account
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
