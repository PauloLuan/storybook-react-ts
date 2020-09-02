import React from 'react'
import { ButtonStyled } from './styles'

interface Props {
  outline: string
}

export const Button: React.FC<Props> = ({ outline }) => {
  return (
    <ButtonStyled outline={outline}>
      {outline ? 'OUTLINE!' : 'NOT OUTLINE'}
    </ButtonStyled>
  )
}
