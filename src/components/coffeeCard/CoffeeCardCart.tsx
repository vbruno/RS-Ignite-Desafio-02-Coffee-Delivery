import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ButtonSecondary, InputNumber } from '..'
import { imgCoffee } from './coffeeType'
import { OrderContext } from '../../context/OrderContext'
import { number } from 'zod'

interface ITypeCoffee {
  type:
    | 'expressoTradicional'
    | 'expressoAmericano'
    | 'expressoCremoso'
    | 'expressoGelado'
    | 'cafeComLeite'
    | 'latte'
    | 'capuccino'
    | 'macchiato'
    | 'macaccino'
    | 'chocolateQuente'
    | 'cubano'
    | 'havaiano'
    | 'arabe'
    | 'irlandes'
}

interface ICoffeeCardCartProps {
  id: number
  name: string
  type: ITypeCoffee['type']
  price: number
  quantity: number
  total: number
}

export const CoffeeCardCart = (props: ICoffeeCardCartProps) => {
  const [numberCoffee, setNumberCoffee] = useState(props.quantity)

  const { cart, setCart, order, setOrder } = useContext(OrderContext)

  useEffect(() => {
    if (numberCoffee < 0) setNumberCoffee(0)
  }, [numberCoffee])

  useEffect(() => {
    if (!cart) return
    setCart((prev) =>
      prev.map((coffee) =>
        coffee.id === props.id
          ? {
              ...coffee,
              quantity: numberCoffee,
              total: Number((coffee.price * numberCoffee).toFixed(2)),
            }
          : coffee,
      ),
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberCoffee])

  // useEffect(() => {
  //   console.log(props)
  //   console.log(cart)
  // }, [props, cart])

  // Remover item do carrinho
  function handleRemoveCoffee() {
    setCart((prev) => prev.filter((coffee) => coffee.id !== props.id))
    setOrder((prev) => prev - numberCoffee)
  }

  return (
    <Container>
      <Info>
        <img src={imgCoffee[props.type]} alt="tipo de café" />

        <Details>
          <p>{props.name}</p>
          <Actions>
            <InputNumber inputValue={numberCoffee} outValue={setNumberCoffee} />
            <ButtonSecondary onClick={handleRemoveCoffee}>
              remover
            </ButtonSecondary>
          </Actions>
        </Details>
      </Info>
      <Value>R${String(props.total.toFixed(2)).replace('.', ',')}</Value>
    </Container>
  )
}

const Container = styled.main`
  display: flex;
  justify-content: space-between;

  width: 368px;
  padding: 8px 4px;

  background: ${({ theme }) => theme['base-card']};
`

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 64px;
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  p {
    color: ${({ theme }) => theme['base-subtitle']};

    /* Text/Regular M */
    font-size: 16px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`
const Actions = styled.div`
  display: flex;

  align-items: center;
  gap: 8px;
`
const Value = styled.p`
  color: ${({ theme }) => theme['base-text']};
  text-align: right;

  /* Text/Bold M */
  font-size: 16px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
`
