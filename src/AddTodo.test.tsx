import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import Header from './features/Todo/Dashboard/Header/Header'
import AddTodoForm from './features/Todo/Dashboard/AddTodoForm/AddTodoForm'

test('test AddTodo reducer', () => {
  render(
    <Provider store={store}>
      <Header />
      <AddTodoForm />
    </Provider>
  )

  const output = screen.getByText('У вас 1 активных задач')
  expect(output).toHaveTextContent('У вас 1 активных задач')

  const addButton = screen.getByText('Добавить')
  fireEvent.click(addButton)
  expect(output).toHaveTextContent('У вас 2 активных задач')
  fireEvent.click(addButton)
  expect(output).toHaveTextContent('У вас 3 активных задач')
})
