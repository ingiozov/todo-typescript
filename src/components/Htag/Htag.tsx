import { HtagProps } from './Htag.props'
import styles from './Htag.module.css'

const Htag = ({ tag, children, ...props }: HtagProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return (
        <h1 {...props} className={styles.h1}>
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 {...props} className={styles.h2}>
          {children}
        </h2>
      )
    default:
      return <></>
  }
}

export default Htag
