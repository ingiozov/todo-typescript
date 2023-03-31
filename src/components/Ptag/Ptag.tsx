import React from 'react'
import { PtagProps } from './Ptag.props'
import styles from './Ptag.module.css'

const Ptag = ({ size = 'm', children }: PtagProps): JSX.Element => {
  return <p className={styles[size]}>{children}</p>
}

export default Ptag
