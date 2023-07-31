import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import styled from 'styled-components'
import { InputText } from '../../components/InputText'

import { defaultTheme } from '../../styles/themes/default'
import { ButtonSelect } from '../../components'

export function Checkout() {
  return (
    <div>
      <CheckoutContainer>
        <AddressPaymentContainer>
          <h1>Complete seu pedido</h1>
          <AddressContainer>
            <div>
              <MapPinLine size={24} color={defaultTheme.yellowDark} />
              <div>
                <h1>Endereço de Entrega</h1>
                <h2>Informe o endereço onde deseja receber seu pedido</h2>
              </div>
            </div>
            <AddressForm>
              <div id="row1">
                <InputText placeholder="CEP" />
              </div>
              <div id="row2">
                <InputText placeholder="Rua" />
              </div>
              <div id="row3">
                <InputText placeholder="Número" />
                <InputText placeholder="Complemento" observation="Opcional" />
              </div>
              <div id="row4">
                <InputText placeholder="Bairro" />
                <InputText placeholder="Cidade" />
                <InputText placeholder="UF" />
              </div>
            </AddressForm>
          </AddressContainer>

          <PaymentContainer>
            <div>
              <CurrencyDollar size={22} color={defaultTheme.purple} />
              <div>
                <h1>Pagamento</h1>
                <h2>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </h2>
              </div>
            </div>
            <PaymentChoice>
              <ButtonSelect Icon="creditCard">CARTÃO DE CRÉDITO</ButtonSelect>
              <ButtonSelect Icon="bank">CARTÃO DE DÉBITO</ButtonSelect>
              <ButtonSelect Icon="money">DINHEIRO</ButtonSelect>
            </PaymentChoice>
          </PaymentContainer>
        </AddressPaymentContainer>
        <OrderSummaryContainer>
          <h1>Resumo do pedido</h1>
        </OrderSummaryContainer>
      </CheckoutContainer>
    </div>
  )
}

const CheckoutContainer = styled.div`
  width: 1120px;
  height: 675px;

  margin: 40px 0;

  display: flex;

  justify-content: space-between;
`

const AddressPaymentContainer = styled.div`
  width: 640px;

  h1 {
    color: ${({ theme }) => theme['base-subtitle']};

    /* Title/Title XS */
    font-family: 'Baloo 2';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 23.4px */
  }
`

const AddressContainer = styled.div`
  width: 640px;

  margin-top: 15px;

  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 40px;

  div:nth-child(1) {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  h1 {
    color: ${({ theme }) => theme['base-subtitle']};

    /* Text/Regular M */
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 20.8px */
  }

  h2 {
    color: ${({ theme }) => theme['base-text']};

    /* Text/Regular S */
    font-family: 'Roboto';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
  }
`

const AddressForm = styled.div`
  width: 560px;
  display: flex;
  flex-direction: column;

  margin-top: 32px;

  gap: 16px;

  #row1 {
    display: flex;
    flex-direction: row;

    div {
      width: 200px;
    }
  }

  #row2 {
    display: flex;
    flex-direction: row;

    div {
      width: 100%;
    }
  }

  #row3 {
    display: flex;
    flex-direction: row;
    gap: 12px;

    div:nth-child(1) {
      width: 200px;
    }

    div:nth-child(2) {
      width: 348px;
    }
  }

  #row4 {
    display: flex;
    flex-direction: row;
    gap: 12px;

    div:nth-child(1) {
      width: 200px;
    }

    div:nth-child(2) {
      width: 276px;
    }

    div:nth-child(3) {
      width: 60px;
    }
  }
`

const PaymentContainer = styled.div`
  width: 640px;

  margin-top: 12px;

  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 40px;

  div:nth-child(1) {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  h1 {
    color: ${({ theme }) => theme['base-subtitle']};

    /* Text/Regular M */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 20.8px */
  }

  h2 {
    color: ${({ theme }) => theme['base-text']};

    /* Text/Regular S */
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
  }
`

const PaymentChoice = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 32px;
  gap: 12px;

  justify-content: space-between;

  button {
    width: 176px;
  }
`

const OrderSummaryContainer = styled.div`
  width: 350px;

  border: 1px solid red;
`
