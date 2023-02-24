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
        className="button__text"
        variant="heading-h3"
      >
        {children}
      </Typography>
    </button>
  );
}

export default Button;
