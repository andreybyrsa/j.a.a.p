import { combineReducers } from '@reduxjs/toolkit';

import user from './user';
import app from './app';
import todos from './todos';

const rootReducer = combineReducers({
  user,
  app,
  todos,
});

export default rootReducer;
