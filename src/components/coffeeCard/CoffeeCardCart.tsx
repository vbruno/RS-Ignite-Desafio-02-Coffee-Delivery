import { useState } from 'react'
import styled from 'styled-components'
import { ButtonSecondary, InputNumber } from '..'
import expresso from './images/expresso.png'

export const CoffeeCardCart = () => {
  const [numberCoffee, setNumberCoffee] = useState(0)

return (
  <Container>
    <div className='info'>
      <img src={expresso} alt="" />
      <div className='details'>
        <p>Expresso Tradicional</p>
        <div className='actions' >
        <InputNumber inputValue={numberCoffee} outValue={setNumberCoffee} />
        <ButtonSecondary>remover</ButtonSecondary>
        </div>
      </div>

    </div>

  <p className='value'>R$ 9,90</p>
  </Container>

)
}


const Container = styled.main`
  display: flex;
  justify-content: space-between;

  width: 368px;
  padding: 8px 4px;

  background: ${({ theme }) => theme['base-card']};

  .info {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .info img {
    width: 64px;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .details p {
    color: ${({ theme }) => theme['base-subtitle']};

    /* Text/Regular M */
    font-size: 16px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  .actions {
    display: flex;

    align-items: center;
    gap: 8px;

  }

  .value {
    color: ${({ theme }) => theme['base-text']};
    text-align: right;

    /* Text/Bold M */
    font-size: 16px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }

`
