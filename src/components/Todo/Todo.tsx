import classNames from 'classnames';
import Typography from '../Typography';
import Button from '../Button';

import './Todo.scss';
import TodoProps from './Todo.types';

function Todo({
  className,

  value,
}: TodoProps) {
  const TodoClassName = classNames(
    'todo',
    className,
  );

  const date = new Date();
  const currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.toString().split(' ')[4].split(':').filter((elem, index) => index < 2).join(':')}`;

  return (
    <div className={TodoClassName}>
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
          {currentDate}
        </Typography>
      </div>
      <Button className="todo__delete-button">Del</Button>
    </div>
  );
}

export default Todo;
