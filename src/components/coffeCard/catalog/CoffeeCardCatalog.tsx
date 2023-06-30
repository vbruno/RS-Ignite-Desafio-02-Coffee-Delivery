import styled from 'styled-components'

import expresso from '../images/expresso.png'
import { ButtonCartState, ButtonState, InputNumber } from '../..'
import { useState } from 'react'

export const CoffeeCardCatalog = () => {
  const [numberCoffee, setNumberCoffee] = useState(0)

  return (
    <Container>
      <img src={expresso} alt="expresso" />
      <p className="tag">Tradicional</p>
      <p>Expresso Tradicional</p>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <div className="buy">
        <span className="">R$ 9,90</span>
        <InputNumber inputValue={numberCoffee} outValue={setNumberCoffee} />
        <ButtonState />
      </div>
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

  p:nth-child(2) {
    margin-top: 12px;

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

  p:nth-child(3) {
    margin-top: 16px;

    color: ${({ theme }) => theme['base-subtitle']};
    /* Title/Title S */
    font-size: 20px;
    font-family: 'Baloo 2';
    line-height: 130%;
  }

  p:nth-child(4) {
    margin-top: 8px;

    width: 216px;

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
`
