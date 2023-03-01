import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../index';

const UserSelector = (state: RootState) => state.user;
export const getUser = createSelector(UserSelector, (user) => user);

export default UserSelector;
