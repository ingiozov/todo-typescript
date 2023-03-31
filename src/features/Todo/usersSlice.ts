import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface UsersState {
  name: string
}

const initialState: UsersState = {
  name: '',
}

export const counterSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {
    addUser: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
  },
})

export const { addUser } = counterSlice.actions
export const selectUser = (state: RootState) => state.users.name
export default counterSlice.reducer
