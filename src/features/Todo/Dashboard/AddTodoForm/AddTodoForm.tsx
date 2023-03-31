import React, { useState } from 'react'
import { useAppDispatch } from '../../../../app/hooks'
import { addTodo } from '../../todosSlice'
import { TiPen } from 'react-icons/ti'
import styles from './AddTodoForm.module.css'
import Input from '../../../../components/Input/Input'
import Button from '../../../../components/Button/Button'

const AddTodoForm = () => {
  const [value, setValue] = useState('')
  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    dispatch(addTodo({ title: value }))
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.addTodoForm}>
      <label>
        <TiPen />
        <Input
          type="text"
          placeholder="Добавьте новую задачу..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button appearance="ghost" width="30%" type="submit">
          Добавить
        </Button>
      </label>
    </form>
  )
}

export default AddTodoForm
