import { useAppSelector } from '../../../app/hooks'
import { selectUser } from '../usersSlice'
import { useNavigate } from 'react-router-dom'
import Header from './Header/Header'
import styles from './Dashboard.module.css'
import AddTodoForm from './AddTodoForm/AddTodoForm'
import { useEffect } from 'react'
import TodoList from './TodoList/TodoList'

const Dashboard = () => {
  const user = useAppSelector(selectUser)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [])

  return (
    <main className={styles.dashboard}>
      <Header />
      <AddTodoForm />
      <TodoList />
    </main>
  )
}

export default Dashboard
