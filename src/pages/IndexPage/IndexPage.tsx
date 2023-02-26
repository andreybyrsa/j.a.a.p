import PageLayout from '../../layout';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import { Navigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { removeUser } from '../../store/reducers/user/UserReducer';
import { setLoading } from '../../store/reducers/app/AppReducer';
import useAuth from '../../hooks/useAuth';

import './IndexPapge.scss';

function IndexPage() {
  const { id } = useAuth()
  const dispatch = useDispatch();

  const onHandlerLogOut = () => {
    dispatch(removeUser());
    dispatch(setLoading());
  }

  if (!id) {
    return <Navigate to="/" />
  }

  return (
    <PageLayout contentClassName="index-page">
      <Typography
        variant="heading-h1"
        color="#ffffff"
      >
        This is J.A.A.P.
      </Typography>
      <Typography
        variant="heading-h1"
        color="#75E3B2"
      >
        Just An Amazing App
      </Typography>
      <Button onClick={onHandlerLogOut}>Log out</Button>
    </PageLayout>
  );
}

export default IndexPage;
