import classNames from 'classnames';

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
      <p className="button__text">{children}</p>
    </button>
  );
}

export default Button;
