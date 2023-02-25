import { useEffect, useState } from 'react';
import PageLayout from '../../../layout';
import Typography from '../../Typography';
import { Navigate } from 'react-router-dom';

import './UserLoader.scss';
import UserLoaderProps from './UserLoader.types';

function UserLoader({
  user,
}: UserLoaderProps) {
  const [userName, setUserName] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (currentIndex === -1) {
      setCurrentIndex(0);
      return;
    }
    if (userName !== user && currentIndex < user.length) {
      setTimeout(() => {
        setUserName(prevState => prevState + user[currentIndex]);
        setCurrentIndex(prevState => prevState + 1);
      }, 120);
    }
    if (userName === user) {
      setUserName(prevState => prevState + '!');
      setTimeout(() => setRedirect(true), 1000);
    }
  }, [currentIndex, user, userName])

  if (redirect) {
    return <Navigate to="/index" />
  }

  return (
    <PageLayout contentClassName="user-loader">
      <Typography
        variant="heading-h1"
        color="#6FBAF8"
      >
        {"Welcome " + userName}
      </Typography>
    </PageLayout>
  );
}

export default UserLoader;
