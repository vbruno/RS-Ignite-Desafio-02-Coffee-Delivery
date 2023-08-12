import styled from 'styled-components'
import image from '../../assets/images/motoboy.svg'
import { ItemIcon } from '../../components/itemIcon/ItemIcon'
import { defaultTheme } from '../../styles/themes/default'
import { OrderContext } from '../../context/OrderContext'
import { useContext } from 'react'

export function Success() {
  const { customerRequest } = useContext(OrderContext)

  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
  }

  function getPaymentType() {
    switch (customerRequest.formPayment) {
      case 'creditCard':
        return 'Cartão de Crédito'
      case 'money':
        return 'Dinheiro'
      case 'bank':
        return 'Cartão de Débito'
      default:
        return 'Não informado'
    }
  }

  return (
    <SuccessContainer>
      <header>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguarda que logo o café chegará até você</h2>
      </header>
      <MainContainer>
        <OrderInfo>
          <ItemOrderInfo>
            <ItemIcon icon="mapPin" cor={defaultTheme.purple} />
            <p>
              Entrega em{' '}
              <b>
                {customerRequest.street}, {customerRequest.number}
              </b>{' '}
              {customerRequest.neighborhood} - {customerRequest.city},{' '}
              {customerRequest.state}
            </p>
          </ItemOrderInfo>
          <ItemOrderInfo>
            <ItemIcon icon="timer" cor={defaultTheme.yellow} />
            <p>
              Previsão de entrega{' '}
              <b>
                {getRandomInt(10, 20)} min - {getRandomInt(30, 60)} min
              </b>
            </p>
          </ItemOrderInfo>
          <ItemOrderInfo>
            <ItemIcon icon="currencyDollar" cor={defaultTheme.yellowDark} />
            <p>
              Pagamento na entrega <b>{getPaymentType()}</b>
            </p>
          </ItemOrderInfo>
        </OrderInfo>
        <img src={image} alt="" style={{ width: '492px', height: '293px' }} />
      </MainContainer>
    </SuccessContainer>
  )
}

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px auto 0;
  width: 1094px;
  /* height: 380px; */
  height: auto;
  flex-shrink: 0;

  header {
    margin-bottom: 28px;
  }

  header h1 {
    color: ${({ theme }) => theme.yellowDark};

    /* Title/Title L */
    font-family: 'Baloo 2';
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%; /* 41.6px */
  }

  header h2 {
    color: ${({ theme }) => theme['base-subtitle']};

    /* Text/Regular L */
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 26px */
  }
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const OrderInfo = styled.div`
  display: flex;
  width: 526px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 40px;
  gap: 32px;
  border: 1px solid ${({ theme }) => theme.yellow};
  border-radius: 6px 36px;
`
const ItemOrderInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  p {
    color: ${({ theme }) => theme['base-text']};
    width: 310px;

    /* Text/Regular M */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 20.8px */
  }
`
