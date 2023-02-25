import React, { useState } from 'react';
import PageLayout from '../../../layout';
import Typography from '../../Typography';
import classNames from 'classnames';

import './ErrorModal.scss';
import ErrorModalProps from './ErrorModal.types';

function ErrorModal({
  className,

  error,
  setError,
}: ErrorModalProps) {
  const [close, setClose] = useState<boolean>(false);
  const ErrorModalClassName = classNames(
    'error-modal',
    className,
  );
  const ErrorModalMessageClassName = classNames(
    'error-modal__message',
    {
      'error-modal--close': close,
    },
  );

  const onHandlerModalClose = () => {
    setClose(true);
    setTimeout(() => {
      setError('');
    }, 600);
  }

  return(
    <PageLayout
      className={ErrorModalClassName}
      contentClassName="error-modal__content"
    >
      <div
        className="error-modal__content-wrapper"
        onClick={onHandlerModalClose}
      >
        <div className={ErrorModalMessageClassName}>
          <Typography
            variant="heading-h1"
            color="#e30000"
          >
            ERROR
          </Typography>
          <Typography
            variant="text-t1"
            color="#6FBAF8"
          >
            {error}
          </Typography>
        </div>
      </div>
    </PageLayout>
  );
}

export default ErrorModal;
