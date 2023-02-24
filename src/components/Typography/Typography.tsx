import React from 'react';
import classNames from 'classnames';

import './Typography.scss';
import TypographyProps from './Typography.types';

function Typography({
  className,

  children = 'Текст',
  variant = 'text-t1',
  color,
}: TypographyProps) {
  const TypographyClassName = classNames(
    'typography',
    `typography-variant--${variant}`,
    className,
  );
  const TypographyStyle: React.CSSProperties = {};

  if (color) {
    TypographyStyle.color = color;
  }

  return (
    <p
      className={TypographyClassName}
      style={TypographyStyle}
    >
      {children}
    </p>
  );
}

export default Typography;
