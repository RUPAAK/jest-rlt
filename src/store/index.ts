import ReduxThunk from "redux-thunk";
import todosSlice from './reducers/test'

import { configureStore } from "@reduxjs/toolkit";
export const middlewares = [ReduxThunk];

export const store = configureStore({
  reducer: {
    test: todosSlice ,
  },
  middleware: middlewares,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
