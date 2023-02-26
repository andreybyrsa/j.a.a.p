import Todo from '../../../domain/Todo';

interface TodoReducerInitialState {
  todos: Todo[]
}

const initialState: TodoReducerInitialState = {
  todos: [],
};

export default initialState;
