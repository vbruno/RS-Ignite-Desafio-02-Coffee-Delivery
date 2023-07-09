import styled from 'styled-components'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Trash } from '@phosphor-icons/react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const ButtonSecondary = ({ children, ...rest }: IButtonProps) => {
  return (
    <Container {...rest}>
      <Trash className="icon" />
      {children}
    </Container>
  )
}

const Container = styled.button`
  display: flex;

  height: 32px;
  width: auto;

  align-items: center;
  justify-content: center;
  padding: 8px 8px;
  background: ${(props) => props.theme['base-button']};
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
    background: ${(props) => props.theme['base-hover']};
    cursor: pointer;
  }

  .icon {
    font-size: 16px;

    color: ${(props) => props.theme.purple};
  }

  &:hover .icon {
    color: ${(props) => props.theme.purpleDark};
  }
`
