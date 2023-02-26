import { createSlice } from '@reduxjs/toolkit';

import initialState from './InitialState';

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true
    },
    removeLoading(state) {
      state.loading = false
    },
  },
});

export const { setLoading, removeLoading } = appSlice.actions;

export default appSlice.reducer;
