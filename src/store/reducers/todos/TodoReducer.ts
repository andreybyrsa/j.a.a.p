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
    removeTodos(state) {
      state.todos = []
    },
    setTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload)
    },
    removeTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((elem) => elem.id !== action.payload)
    },
    setIsDoneTodo(state, action: PayloadAction<number>) {
      const currentTodo: Todo | undefined = state.todos.find((elem) => elem.id === action.payload);
      if (currentTodo) {
        currentTodo.isDone = true;
      }
    }
  }
});

export const { setTodos, setTodo, removeTodo, removeTodos, setIsDoneTodo } = todosSlice.actions;

export default todosSlice.reducer;
