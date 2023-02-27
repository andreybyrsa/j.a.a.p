import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState from './InitialState';
import Todo from '../../../domain/Todo';

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<Todo[]>) {
      state.todos = action.payload
    },
    setTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload)
    },
    removeTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((elem) => elem.id !== action.payload)
    }
  }
});

export const { setTodos, setTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
