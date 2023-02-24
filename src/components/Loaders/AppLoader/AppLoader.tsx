import { RingLoader } from 'react-spinners';
import PageLayout from '../../../layout';

import './AppLoader.scss'

function AppLoader() {
  return (
    <PageLayout contentClassName="app-loader">
      <RingLoader
        color="#6FBAF8"
        size={100}
      />
    </PageLayout>
  );
}

export default AppLoader;
