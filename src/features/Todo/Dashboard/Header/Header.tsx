import { useAppSelector } from '../../../../app/hooks'
import { selectUser } from '../../usersSlice'
import { selectActiveTodos } from '../../todosSlice'
import styles from './Header.module.css'
import Htag from '../../../../components/Htag/Htag'
import Ptag from '../../../../components/Ptag/Ptag'

const Header = () => {
  const user = useAppSelector(selectUser)
  const activeTodos = useAppSelector(selectActiveTodos)

  return (
    <header className={styles.header}>
      <Htag tag="h1">{`Привет ${user}!`}</Htag>
      <Ptag size="m">{`У вас ${activeTodos.length} активных задач`}</Ptag>
    </header>
  )
}

export default Header
