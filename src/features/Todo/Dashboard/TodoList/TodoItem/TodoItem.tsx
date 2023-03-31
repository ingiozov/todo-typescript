import { useState } from 'react'
import { useSelector } from 'react-redux'
import { TodoItemProps } from './TodoItemProps'
import { RootState } from '../../../../../app/store'
import { useAppDispatch } from '../../../../../app/hooks'
import { deleteTodo, toggleComplete, editTodo } from '../../../todosSlice'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'
import styles from './TodoItem.module.css'

const TodoItem = ({ id, title, completed }: TodoItemProps) => {
  const [editing, setEditing] = useState(false)
  const prevValue = useSelector((state: RootState) => {
    const todoIndex = state.todos.todos.findIndex((todo) => todo.id === id)
    return state.todos.todos[todoIndex].title
  })
  const [editValue, setEditValue] = useState(prevValue)
  const dispatch = useAppDispatch()

  const handleComplete = () => {
    dispatch(toggleComplete({ id, completed: !completed }))
  }

  const handleDelete = () => {
    dispatch(deleteTodo({ id }))
  }

  const handleEdit = () => {
    dispatch(editTodo({ id: id, title: editValue }))
    setEditing(false)
  }

  return (
    <li role={'listitem'} className={styles.TodoItem}>
      <div className={styles.title} onClick={handleComplete}>
        {completed && !editing && <s>{title}</s>}
        {!completed && !editing && <p>{title}</p>}
      </div>
      {!editing && (
        <div className={styles.buttons}>
          <button type="button" onClick={handleDelete}>
            <FaTrashAlt />
          </button>
          <button type="button" onClick={() => setEditing(true)}>
            <FaEdit />
          </button>
        </div>
      )}
      {editing && (
        <div className={styles.editBlock}>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button type="button" onClick={handleEdit}>
            Сохранить
          </button>
        </div>
      )}
    </li>
  )
}

export default TodoItem
