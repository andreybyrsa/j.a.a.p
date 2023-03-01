import { select, takeEvery, put, all } from 'redux-saga/effects';

import UserSelector  from '../reducers/user/UserSelector';
import User from '../../domain/User';
import { setUser } from '../reducers/user/UserReducer';

import TodosSelector from '../reducers/todos/TodosSelector';
import Todo from '../../domain/Todo';
import { removeTodo, setTodo, setTodos } from '../reducers/todos/TodoReducer';

import { getDataBase, setDataBase } from '../../api';

export function* setReduxData() {
  const user: User = yield select(UserSelector);
  const data: Todo[] = yield getDataBase(user.id);

  if (data) {
    yield put(setTodos(data));
  } else {
    yield put(setTodos([]));
  }
}

export function* updateDataBase() {
  const user: User = yield select(UserSelector);
  const todos: Todo[] = yield select(TodosSelector);

  yield setDataBase(user.id, todos);
}

export function* watchDataBase() {
  yield all([
    takeEvery(setUser, setReduxData),
    takeEvery(setTodo, updateDataBase),
    takeEvery(removeTodo, updateDataBase),
  ]);
}

export default function* rootSaga() {
  yield watchDataBase();
}