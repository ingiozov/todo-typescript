import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface iTodo {
  id: number
  title: string
  completed: boolean
}
interface TodosState {
  todos: iTodo[]
}

const initialState: TodosState = {
  todos: [{ id: 1, title: 'todo1', completed: false }],
}

const TodosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      }
      state.todos.push(newTodo)
    },
    toggleComplete: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      )
      state.todos[index].completed = action.payload.completed
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
    },
    editTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      )
      state.todos[index].title = action.payload.title
    },
  },
})

export const { addTodo, toggleComplete, deleteTodo, editTodo } =
  TodosSlice.actions

export const selectAllTodos = (state: RootState) =>
  state.todos.todos.map((todo) => todo)

export const selectActiveTodos = (state: RootState) =>
  state.todos.todos.filter((todo) => todo.completed === false)

export default TodosSlice.reducer
