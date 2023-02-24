import { ChangeEvent } from 'react';
import classNames from 'classnames';

import './Input.scss';
import InputProps from './Input.types';

function Input({
  className,

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
        value={value}
        onChange={onHandlerChange}
        className="input__field"
      />
      {!value && <p className="input__placeholder">{placeholder}</p>}
    </div>
  )
}

export default Input;
