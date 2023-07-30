import styled from 'styled-components'

import { useContext, useEffect, useState } from 'react'
import { ButtonState, InputNumber } from '..'

import { ICoffeeType, coffeeType, imgCoffee } from './coffeeType'
import { ICoffee, OrderContext } from '../../context/OrderContext'

interface ICoffeeCardCatalogProps {
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

export const CoffeeCardCatalog = ({ type }: ICoffeeCardCatalogProps) => {
  const [numberCoffee, setNumberCoffee] = useState(0)
  const [coffee, setCoffee] = useState<ICoffeeType>()

  const { setCart, setOrder } = useContext(OrderContext)

  useEffect(() => {
    setCoffee(coffeeType.find((coffee) => coffee.type === type) as ICoffeeType)
  }, [type])

  function handleAddCoffee() {
    if (coffee === undefined) return

    const coffeeAddCart: ICoffee = {
      name: coffee.title,
      price: coffee?.price,
      quantity: numberCoffee,
      total: Number((coffee?.price * numberCoffee).toFixed(2)),
    }

    setCart((prev) => [...prev, { ...coffeeAddCart }])
    setOrder((prev) => prev + numberCoffee)

    setNumberCoffee(0)
  }

  return (
    <Container>
      <img src={imgCoffee[type]} alt="expresso" />
      <Tag>
        {coffee?.tag.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </Tag>
      <Title>{coffee?.title}</Title>
      <Content>{coffee?.content}</Content>
      <Buy>
        <span>
          R$ <strong>{coffee?.price.toFixed(2)}</strong>
        </span>
        <div>
          <InputNumber inputValue={numberCoffee} outValue={setNumberCoffee} />
          <ButtonState onClick={handleAddCoffee} />
        </div>
      </Buy>
    </Container>
  )
}

const Container = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 256px;
  height: 310px;

  background: ${({ theme }) => theme['base-card']};

  border-radius: 6px 36px;

  img {
    width: 120px;
    height: 120px;

    margin-top: -20px;
  }

  .tag {
    margin-top: 12px;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .tag p {
    padding: 4px 8px;

    background: ${({ theme }) => theme.yellowLight};
    border-radius: 100px;

    color: ${({ theme }) => theme.yellowDark};

    /* Components/Tag */
    font-size: 10px;
    font-family: 'Roboto';
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
  }

  .title {
    margin-top: 16px;

    color: ${({ theme }) => theme['base-subtitle']};
    /* Title/Title S */
    font-size: 20px;
    font-family: 'Baloo 2';
    line-height: 130%;
  }

  .content {
    margin-top: 8px;

    width: 220px;

    color: ${({ theme }) => theme['base-label']};
    text-align: center;
    /* Text/Regular S */
    font-size: 14px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  .buy {
    margin-top: 33px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 208px;
  }

  .buy span {
    color: ${({ theme }) => theme['base-text']};
    text-align: right;
    font-size: 14px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  .buy span strong {
    text-align: right;
    font-size: 24px;
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 130%;
  }

  .buy div {
    height: 38px;

    display: flex;
    align-items: center;
    gap: 8px;
  }
`
const Tag = styled.div`
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 4px;

  p {
    padding: 4px 8px;

    background: ${({ theme }) => theme.yellowLight};
    border-radius: 100px;

    color: ${({ theme }) => theme.yellowDark};

    /* Components/Tag */
    font-size: 10px;
    font-family: 'Roboto';
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
  }
`

const Title = styled.p`
  margin-top: 16px;

  color: ${({ theme }) => theme['base-subtitle']};
  /* Title/Title S */
  font-size: 20px;
  font-family: 'Baloo 2';
  line-height: 130%;
`

const Content = styled.p`
  margin-top: 8px;

  width: 220px;

  color: ${({ theme }) => theme['base-label']};
  text-align: center;
  /* Text/Regular S */
  font-size: 14px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`

const Buy = styled.div`
  margin-top: 33px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 208px;

  span {
    color: ${({ theme }) => theme['base-text']};
    text-align: right;
    font-size: 14px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  span strong {
    text-align: right;
    font-size: 24px;
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 130%;
  }

  div {
    height: 38px;

    display: flex;
    align-items: center;
    gap: 8px;
  }
`
