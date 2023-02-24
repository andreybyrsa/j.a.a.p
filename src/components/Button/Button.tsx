import classNames from 'classnames';
import Typography from '../Typography';

import './Button.scss'
import ButtonProps from './Button.types';

function Button({
  className,

  children = 'Кнопка',
  onClick,
}: ButtonProps) {
  const ButtonClassName = classNames(
    'button',
    className,
  );

  return (
    <button
      className={ButtonClassName}
      onClick={onClick}
      type="button"
    >
      <Typography
        variant="heading-h3"
        color="#000000"
      >
        {children}
      </Typography>
    </button>
  );
}

export default Button;
