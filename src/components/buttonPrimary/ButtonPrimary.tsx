import styled from 'styled-components'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface IButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const ButtonPrimary = ({ children, ...rest }: IButtonPrimaryProps) => {
  return <Container {...rest}>{children}</Container>
}

const Container = styled.button`
  display: flex;

  width: 132px;

  align-items: center;
  justify-content: center;
  padding: 12px 8px;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  gap: 4px;
  border: none;

  /* Components/Button G */
  font-size: 14px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;

  outline: 0;

  &:hover {
    background: ${(props) => props.theme.yellowDark};
    cursor: pointer;
  }
`
