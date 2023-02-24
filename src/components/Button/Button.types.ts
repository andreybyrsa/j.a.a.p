import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  className?: string

  children?: React.ReactNode
  onClick?: MouseEventHandler
}

export default ButtonProps;
