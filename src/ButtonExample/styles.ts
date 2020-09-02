import styled from 'styled-components'

interface Props {
  outline: string
}

export const ButtonStyled = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  height: 50px;
  width: 200px;
  font-size: 16px;
  border-radius: 4px;

  color: ${props => (props.outline ? 'black' : 'blue')};
  background: ${props => (props.outline ? 'red' : 'transparent')};
  border: ${props => (props.outline ? 'red' : '1px solid red')};
`
