import { useState } from 'react'
import { useAppSelector } from '../../../../app/hooks'
import { selectAllTodos } from '../../todosSlice'
import TodoItem from './TodoItem/TodoItem'
import Button from '../../../../components/Button/Button'
import styles from './TodoList.module.css'

const TodoList = () => {
  const [sort, setSort] = useState('active')
  const todos = useAppSelector(selectAllTodos)

  return (
    <section>
      <div className={styles.displayButtons}>
        <Button
          width="30%"
          className={sort === 'active' ? styles.active : ''}
          onClick={() => setSort('active')}
        >
          Активные
        </Button>
        <Button
          width="30%"
          className={sort === 'completed' ? styles.active : ''}
          onClick={() => setSort('completed')}
        >
          Неактивные
        </Button>
        <Button
          width="30%"
          className={sort === 'all' ? styles.active : ''}
          onClick={() => setSort('all')}
        >
          Все
        </Button>
      </div>
      <ul className={styles.TodoList}>
        {todos.length > 0 && sort === 'active'
          ? todos.map(
              (todo) =>
                !todo.completed && (
                  <TodoItem
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                  />
                )
            )
          : todos.length > 0 && sort === 'completed'
          ? todos.map(
              (todo) =>
                todo.completed && (
                  <TodoItem
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                  />
                )
            )
          : todos.length > 0 && sort === 'all'
          ? todos.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
              />
            ))
          : null}
      </ul>
    </section>
  )
}

export default TodoList
