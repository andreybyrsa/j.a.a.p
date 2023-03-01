import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../index';

const TodosSelector = (state: RootState) => state.todos;
export const getTodos = createSelector(TodosSelector, (todos) => todos);

export default TodosSelector;
