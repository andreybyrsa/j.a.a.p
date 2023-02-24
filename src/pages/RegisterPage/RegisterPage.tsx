import { useState } from 'react';
import PageLayout from '../../layout';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Typography from '../../components/Typography';
import { NavLink } from 'react-router-dom';

import './RegisterPage.scss';

function RegisterPage() {
  const [userName, setUserName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <PageLayout contentClassName="register-page">
      <Input
        type="text"
        value={userName}
        setValue={setUserName}
        placeholder="UserName"
      />
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
      <Button>Sing up</Button>
      <div className="register-page__redirection">
        <Typography
          variant="text-t2"
          color="#6FBAF8"
        >
          Already have an account?
        </Typography>
        <NavLink
          className="register-page__redirect-link"
          to="/"
        >
          Just Sign in
        </NavLink>
      </div>
    </PageLayout>
  );
}

export default RegisterPage;
