import { ChangeEvent } from 'react';
import classNames from 'classnames';
import Typography from '../Typography';

import './Input.scss';
import InputProps from './Input.types';

function Input({
  className,

  type = 'text',

  value,
  setValue,

  placeholder = 'Пример',
}: InputProps) {
  const InputClassName = classNames(
    'input',
    className,
  );

  const onHandlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(event.target.value)
    }
  }

  return (
    <div className={InputClassName}>
      <input
        type={type}
        value={value}
        onChange={onHandlerChange}
        className="input__field"
      />
      {!value && (
        <Typography
          className="input__placeholder"
          variant="text-t1"
          color="#4c81a9"
        >
          {placeholder}
        </Typography>
      )}
    </div>
  )
}

export default Input;
