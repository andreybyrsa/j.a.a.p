import { useEffect, useState } from 'react';
import PageLayout from '../../../layout';
import Typography from '../../Typography';
import { Navigate } from 'react-router-dom';

import './UserLoader.scss';
import UserLoaderProps from './UserLoader.types';

function UserLoader({
  user,
}: UserLoaderProps) {
  const [greetings, setGreetings] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const Greetings = `Welcome ${user}!`;

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (currentIndex === -1) {
      setCurrentIndex(0);
      return;
    }
    if (greetings !== Greetings && currentIndex < Greetings.length) {
      setTimeout(() => {
        setGreetings(prevState => prevState + Greetings[currentIndex]);
        setCurrentIndex(prevState => prevState + 1);
      }, 120);
    }
    if (greetings === Greetings) {
      setTimeout(() => setRedirect(true), 1000);
    }
  }, [Greetings, currentIndex, greetings])

  if (redirect) {
    return <Navigate to="/index" />
  }

  return (
    <PageLayout contentClassName="user-loader">
      <Typography
        variant="heading-h1"
        color="#6FBAF8"
      >
        {greetings}
      </Typography>
    </PageLayout>
  );
}

export default UserLoader;
