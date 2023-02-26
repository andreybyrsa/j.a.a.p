import classNames from 'classnames';
import Typography from '../Typography';
import Button from '../Button';

import './Todo.scss';
import TodoProps from './Todo.types';

function Todo({
  className,

  id,
  value,
  date,

  onClick,
}: TodoProps) {
  const TodoClassName = classNames(
    'todo',
    className,
  );

  return (
    <div
      className={TodoClassName}
      key={id}
    >
      <div className="todo__description">
        <Typography
          variant="text-t1"
          color="#6FBAF8"
        >
          {value}
        </Typography>
        <Typography
          variant="text-t2"
          color="#4c81a9"
        >
          {date}
        </Typography>
      </div>
      <Button
        className="todo__delete-button"
        onClick={onClick}
      >
        Del
      </Button>
    </div>
  );
}

export default Todo;
