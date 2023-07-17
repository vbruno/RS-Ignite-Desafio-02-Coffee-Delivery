import { useState } from 'react'
import styled from 'styled-components'
import { ButtonSecondary, InputNumber } from '..'
import expresso from './images/expresso.png'

export const CoffeeCardCart = () => {
  const [numberCoffee, setNumberCoffee] = useState(0)

  return (
    <Container>
      <Info>
        <img src={expresso} alt="" />
        <Details>
          <p>Expresso Tradicional</p>
          <Actions>
            <InputNumber inputValue={numberCoffee} outValue={setNumberCoffee} />
            <ButtonSecondary>remover</ButtonSecondary>
          </Actions>
        </Details>
      </Info>
      <Value>R$ 9,90</Value>
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
