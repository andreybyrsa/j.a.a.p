import React, { FormEventHandler, SetStateAction } from 'react';

interface InputProps {
  className?: string

  type?: 'text' | 'password' | 'email'

  value?: string
  setValue?:  React.Dispatch<SetStateAction<string>>

  onSubmit?: FormEventHandler<HTMLFormElement>

  placeholder?: string
}

export default InputProps;
