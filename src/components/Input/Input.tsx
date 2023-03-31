import React from 'react'
import { InputProps } from './Input.props'

const Input = ({ className, ...props }: InputProps): JSX.Element => {
  return <input className={className} {...props} />
}

export default Input
