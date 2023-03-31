import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../app/hooks'
import { addUser } from '../usersSlice'
import Htag from '../../../components/Htag/Htag'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import styles from './LoginForm.module.css'

const LoginForm = () => {
  const [value, setValue] = useState('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (value) {
      dispatch(addUser(value))
      navigate('/dashboard')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <Htag tag="h2">Вход</Htag>
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите имя"
      />
      <Button width="100%" appearance="primary" type="submit">
        войти
      </Button>
    </form>
  )
}

export default LoginForm
