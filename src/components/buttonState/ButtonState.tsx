import styled from 'styled-components'
import { ButtonHTMLAttributes } from 'react'
import { ShoppingCartSimple } from '@phosphor-icons/react'

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonState = ({ ...rest }: IButtonProps) => {
  return (
    <Container {...rest}>
      <ShoppingCartSimple className="icon" weight="fill" />
    </Container>
  )
}

const Container = styled.button`
  display: flex;

  height: 38px;
  width: 38px;

  align-items: center;
  justify-content: center;
  padding: 8px 8px;
  background: ${(props) => props.theme.purpleDark};
  border-radius: 6px;
  gap: 4px;
  border: none;

  /* Components/Button G */
  color: ${(props) => props.theme['base-text']};
  font-size: 12px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;

  outline: 0;

  &:hover {
    background: ${(props) => props.theme.purple};
    cursor: pointer;
  }

  .icon {
    font-size: 22px;

    color: ${(props) => props.theme['base-card']};
  }
`
