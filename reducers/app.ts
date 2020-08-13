import { createSlice } from '@reduxjs/toolkit';
import { REHYDRATE } from 'redux-persist';
import { AppThunk } from '_store';
import { toJson } from 'unsplash-js';
import unsplash from '../apis/unslpash';

const INIT_STATE = {
  demo: false,
  searched: { data: null, loading: false },
  currentUser: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState: INIT_STATE,
  reducers: {
    setDemo: (state, action) => {
      state.demo = action.payload;
    },
    setSearchedUser: (state, action) => {
      state.searched = {
        loading: false,
        data: action.payload,
      };
    },
    setSearchedLoading: (state) => {
      state.searched.loading = true;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: {
    [REHYDRATE]: (state, action) => {
      return { ...state, app: INIT_STATE };
    },
  },
});

export const {
  setSearchedUser,
  setSearchedLoading,
  setCurrentUser,
} = appSlice.actions;

export default appSlice.reducer;

///Async

export const searchUser = (name: string): AppThunk => async (
  dispatch,
) => {
  dispatch(setSearchedLoading());
  try {
    unsplash.search
      .users(name)
      .then(toJson)
      .then((json: any) => {
        if (json.errors) {
          dispatch(setSearchedUser(null));
        } else dispatch(setSearchedUser(json.results));
      });
  } catch (error) {
    console.log(error);
  }
};
