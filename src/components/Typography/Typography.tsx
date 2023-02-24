import classNames from 'classnames';

import './Typography.scss';
import TypographyProps from './Typography.types';

function Typography({
  className,

  children = 'Текст',
  variant = 'text-t1',
  color = '#ffffff',
}: TypographyProps) {
  const TypographyClassName = classNames(
    'typography',
    `typography-variant--${variant}`,
    className,
  );

  return (
    <p
      className={TypographyClassName}
      style={{ color: color }}
    >
      {children}
    </p>
  );
}

export default Typography;
