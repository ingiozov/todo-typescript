import { ButtonProps } from './Button.props'
import styles from './Button.module.css'

const Button = ({
  width,
  appearance,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      style={{ width }}
      className={appearance === 'primary' ? styles.active : ''}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
