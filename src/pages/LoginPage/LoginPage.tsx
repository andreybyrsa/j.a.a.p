import {useEffect, useState} from 'react';
import PageLayout from '../../layout';
import Input from '../../components/Input';
import Button from '../../components/Button';
import AppLoader from '../../components/Loaders/AppLoader';

import './LoginPage.scss'

function LoginPage() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2450);
  }, [])

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
      <Button>Login</Button>
    </PageLayout>
  );
}

export default LoginPage;
