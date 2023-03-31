import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import usersReducer from '../features/Todo/usersSlice'
import todosReducer from '../features/Todo/todosSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    todos: todosReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
