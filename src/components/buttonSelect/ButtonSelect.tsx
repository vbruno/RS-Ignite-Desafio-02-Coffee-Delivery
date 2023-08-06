import styled from 'styled-components'
import {
  ButtonHTMLAttributes,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { CreditCard, Money, Bank } from '@phosphor-icons/react'
import { OrderContext } from '../../context/OrderContext'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  Icon?: 'creditCard' | 'money' | 'bank' | 'none'
}

export const ButtonSelect = ({
  Icon = 'none',
  children,
  ...rest
}: IButtonProps) => {
  const [isSelect, setIsSelect] = useState(false)
  const { formPayment, setFormPayment } = useContext(OrderContext)

  useEffect(() => {
    if (formPayment.selectPayment === Icon) {
      setIsSelect(true)
    } else {
      setIsSelect(false)
    }
  }, [Icon, formPayment])

  function handleSelect() {
    setFormPayment((prevState) => ({ ...prevState, selectPayment: Icon }))
  }

  return (
    <Container {...rest} onClick={handleSelect} value={Number(isSelect)}>
      <div className={isSelect ? 'select' : ''}>
        {Icon === 'creditCard' && <CreditCard className="icon" />}
        {Icon === 'money' && <Money className="icon" />}
        {Icon === 'bank' && <Bank className="icon" />}
        {children}
      </div>
    </Container>
  )
}

const Container = styled.button`
  /* display: flex; */

  /* height: 32px; */
  /* width: auto; */

  background: none;
  border: none;

  outline: 0;

  div {
    display: flex;
    border-radius: 6px;

    /* width: 100%; */
    /* height: 100%; */

    align-items: center;
    justify-content: center;
    padding: 8px 8px;
    background: ${(props) => props.theme['base-button']};
    gap: 4px;
    border: none;

    /* Components/Button G */
    color: ${(props) => props.theme['base-text']};
    font-size: 12px;
    font-family: Roboto;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;

    &:hover {
      background: ${(props) => props.theme['base-hover']};
      cursor: pointer;
    }
  }

  .icon {
    font-size: 16px;

    color: ${(props) => props.theme.purple};
  }

  &:hover .icon {
    color: ${(props) => props.theme.purpleDark};
  }

  .select {
    background: ${(props) => props.theme.purpleLight};
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.purpleDark};
  }
`
