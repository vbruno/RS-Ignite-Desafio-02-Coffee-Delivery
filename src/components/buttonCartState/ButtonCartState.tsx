import styled from 'styled-components'
import { ButtonHTMLAttributes } from 'react'
import { ShoppingCart } from '@phosphor-icons/react'

type IButtonPrimaryProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  value?: number
  visible?: boolean
}

export const ButtonCartState = ({
  value,
  visible,
  ...rest
}: IButtonPrimaryProps) => {
  return (
    <Container {...rest}>
      <ShoppingCart className="icon" weight="fill" />
      <span style={{ visibility: visible ? 'visible' : 'hidden' }}>
        {value}
      </span>
    </Container>
  )
}

const Container = styled.button`
  display: flex;

  position: relative;

  height: 38px;
  width: 38px;

  align-items: center;
  justify-content: center;
  padding: 8px 8px;
  background: ${(props) => props.theme.yellowLight};
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
    cursor: pointer;
  }

  .icon {
    font-size: 22px;

    color: ${(props) => props.theme.yellowDark};
  }

  span {
    width: 20px;
    height: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -8px;
    right: -8px;

    background: ${(props) => props.theme.yellowDark};
    color: ${(props) => props.theme.white};

    /* Text/Bold S */
    font-size: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.72px;

    border-radius: 50%;
  }
`
