import { render, screen, fireEvent } from '@testing-library/react'
import Button from './components/Button/Button'

test('handles onClick', () => {
  const onClick = jest.fn()
  render(
    <Button onClick={onClick} title="Add Item">
      button
    </Button>
  )
  const element = screen.getByText('button')
  fireEvent.click(element)
  expect(onClick).toHaveBeenCalledTimes(1)
})
