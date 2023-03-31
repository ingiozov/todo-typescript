import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import TodoList from './features/Todo/Dashboard/TodoList/TodoList'

test('renders todos', () => {
  const items = [
    {
      id: 1,
      title: 'todo1',
      completed: false,
    },
  ]
  render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  )
  const elems = screen.getAllByRole('listitem')
  expect(elems[0]).toHaveClass('TodoItem')
})
