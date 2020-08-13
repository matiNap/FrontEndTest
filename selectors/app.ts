import { RootState } from '_store';

export const selectSearchedUsers = (state: RootState) =>
  state.app.searched;
export const selectCurrentUser = (state: RootState) =>
  state.app.currentUser;
