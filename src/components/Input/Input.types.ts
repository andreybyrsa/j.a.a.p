import React, { SetStateAction } from 'react';

interface InputProps {
  className?: string

  value?: string
  setValue?:  React.Dispatch<SetStateAction<string>>

  placeholder?: string
}

export default InputProps;
