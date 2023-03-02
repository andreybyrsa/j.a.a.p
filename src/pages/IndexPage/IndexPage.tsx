import { FormEvent, useCallback, useMemo, useState } from 'react';
import PageLayout from '../../layout';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Todo from '../../components/Todo';
import TodoTypes from '../../domain/Todo';
import { Navigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../store/reducers/user/UserReducer';
import { setLoading } from '../../store/reducers/app/AppReducer';
import { removeTodo, removeTodos, setIsDoneTodo, setTodo } from '../../store/reducers/todos/TodoReducer';
import useAuth from '../../hooks/useAuth';

import './IndexPapge.scss';
import { RootState } from '../../store';

function IndexPage() {
  const [value, setValue] = useState<string>('');

  const { todos } = useSelector((state: RootState) => state.todos);

  const { id } = useAuth();
  const dispatch = useDispatch();

  const onHandlerSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    const todo: TodoTypes = {
      id: todos.length > 0 ? Math.max(...todos.map(elem => elem.id)) + 1 : 1,
      text: value,
      isDone: false,
      date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()} ${new Date().toString().split(' ')[4].split(':').filter((elem, index) => index < 2).join(':')}`,
    }
    dispatch(setTodo(todo));
    event.preventDefault();
    setValue('');
  }, [dispatch, todos, value]);

  const onHandlerRemoveTodo = (index: number) => {
    dispatch(setIsDoneTodo(index));
    setTimeout(() => dispatch(removeTodo(index)), 400);
  }

  const onHandlerLogOut = useCallback(() => {
    dispatch(removeUser());
    dispatch(removeTodos());
    dispatch(setLoading());
  }, [dispatch]);

  const header = useMemo(() => {
    return (
      <div className="index-page__header">
        <Typography
          variant="heading-h1"
          color="#75E3B2"
        >
          Just An Amazing App
        </Typography>
        <Input
          value={value}
          setValue={setValue}
          onSubmit={onHandlerSubmit}
          placeholder="Text a new todo"
        />
      </div>
    );
  }, [onHandlerSubmit, value]);

  const footer = useMemo(() => {
    return (
      <div className="index-page__footer">
        <Button onClick={onHandlerLogOut}>Log out</Button>
      </div>
    );
  }, [onHandlerLogOut]);

  if (!id) {
    return <Navigate to="/" />
  }

  return (
    <PageLayout
      contentClassName="index-page"
      header={header}
      footer={footer}
    >
      {todos.length ? todos.map((elem: TodoTypes) => (
        <Todo
          key={elem.id}
          value={elem.text}
          date={elem.date}
          isDone={elem.isDone}
          onClick={() => onHandlerRemoveTodo(elem.id)}
        />
      )) : (
        <Typography
          variant="text-t1"
          color="#75E3B2"
        >
          No any todos
        </Typography>
      )}
    </PageLayout>
  );
}

export default IndexPage;
