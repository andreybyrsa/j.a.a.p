import {FormEvent, useCallback, useEffect, useMemo, useState} from 'react';
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
import {removeTodo, setTodo, setTodos} from '../../store/reducers/todos/TodoReducer';
import useAuth from '../../hooks/useAuth';

import { child, get, getDatabase, ref, set } from 'firebase/database';

import './IndexPapge.scss';
import { RootState } from '../../store';

function IndexPage() {
  const [value, setValue] = useState<string>('');
  const [dataBase, setDataBase] = useState<TodoTypes[]>([]);

  const { todos } = useSelector((state: RootState) => state.todos);

  const { id } = useAuth();
  const dispatch = useDispatch();

  const onHandlerSubmit = (event: FormEvent<HTMLFormElement>) => {
    const todo: TodoTypes = {
      id: todos.length > 0 ? Math.max(...todos.map(elem => elem.id)) + 1 : 1,
      text: value,
      date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()} ${new Date().toString().split(' ')[4].split(':').filter((elem, index) => index < 2).join(':')}`,
    }
    dispatch(setTodo(todo));
    event.preventDefault();
    setValue('');
  }

  useEffect(() => {
    (async () => {
      const db = getDatabase();
      await set(ref(db, `user${id}/todos`), {
        todos: todos,
      });
      const dbRef = ref(getDatabase());
      if (value === '') {
        await get(child(dbRef, `user${id}/todos/todos`)).then((data) => {
          setDataBase(data.val());
        });
      }
    })();
    console.log(1);
  }, [id, setValue, todos, value]);

  useEffect(() => {
    if (id) {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `user${id}/todos/todos`)).then((data) => {
        if (data.val()) {
          dispatch(setTodos(data.val()));
        } else {
          dispatch(setTodos([]));
        }
      });
    }
  }, [dispatch, id]);

  const onHandlerRemoveTodo = (index: number) => {
    dispatch(removeTodo(index));
  }

  const onHandlerLogOut = useCallback(() => {
    dispatch(removeUser());
    dispatch(setLoading());
  }, [dispatch])

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
      footer={footer}
    >
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
      {dataBase ? dataBase.map((elem: TodoTypes) => (
        <Todo
          id={elem.id}
          value={elem.text}
          date={elem.date}
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
