import PageLayout from '../../layout';
import Typography from '../../components/Typography';
import Button from '../../components/Button';

import './IndexPapge.scss';

function IndexPage() {
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
      <Button>Log out</Button>
    </PageLayout>
  );
}

export default IndexPage;
