import React, { SetStateAction } from 'react';

interface ErrorModalProps {
  className?: string

  error: string
  setError: React.Dispatch<SetStateAction<string>>
}

export default ErrorModalProps;
