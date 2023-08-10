import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import styled from 'styled-components'
import { InputText } from '../../components/InputText'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { Controller, set, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { DevTool } from '@hookform/devtools'

import { defaultTheme } from '../../styles/themes/default'
import { ButtonPrimary, ButtonSelect } from '../../components'
import { CoffeeCardCart } from '../../components/coffeeCard/CoffeeCardCart'
import { FormEvent, useContext, useEffect, useRef, useState } from 'react'
import { OrderContext } from '../../context/OrderContext'

const schemaForm = z.object({
  cep: z.string().nonempty('Campo CEP vazio'),
  street: z.string().nonempty('Campo rua vazio'),
  number: z.string().nonempty('Campo número vazio'),
  complement: z.string(),
  neighborhood: z.string().nonempty('Campo bairro vazio'),
  city: z.string().nonempty('Campo cidade vazio'),
  state: z.string().nonempty('Campo estado vazio'),
})

// extract the type from the schema
type FormType = z.infer<typeof schemaForm>

export function Checkout() {
  const navigate = useNavigate()
  const formRef = useRef<HTMLFormElement>(null)
  const { formPayment, order, cart } = useContext(OrderContext)
  const [totalItensCoffee, setTotalItensCoffee] = useState(0)
  const [totalPaid, setTotalPaid] = useState(0)
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
    resolver: zodResolver(schemaForm),
  })

  useEffect(() => {
    if (!cart) return
    const total: number = cart.reduce((acc, coffee) => {
      return acc + coffee.total
    }, 0)

    setTotalItensCoffee(total)
    setTotalPaid(Number(total + 3.5))

    console.log(total)
  }, [cart, setTotalPaid])

  function onSubmit(data: FormType) {
    console.log(data)
  }

  function handleSubmitEvent() {
    // formRef.current?.dispatchEvent(new Event('submit', { bubbles: true }))
    formRef.current?.requestSubmit()
  }

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
            <AddressForm ref={formRef} onSubmit={handleSubmit(onSubmit)}>
              <div id="row1">
                <Controller
                  name="cep"
                  control={control}
                  render={({ field }) => (
                    <InputText
                      {...field}
                      placeholder="CEP"
                      type="number"
                      error={errors.cep?.message}
                    />
                  )}
                />
              </div>
              <div id="row2">
                <Controller
                  name="street"
                  control={control}
                  render={({ field }) => (
                    <InputText
                      {...field}
                      placeholder="Rua"
                      error={errors.street?.message}
                    />
                  )}
                />
              </div>
              <div id="row3">
                <Controller
                  name="number"
                  control={control}
                  render={({ field }) => (
                    <InputText
                      {...field}
                      placeholder="Número"
                      type="number"
                      error={errors.number?.message}
                    />
                  )}
                />
                <Controller
                  name="complement"
                  control={control}
                  render={({ field }) => (
                    <InputText
                      {...field}
                      observation="Opcional"
                      placeholder="Complemento"
                    />
                  )}
                />
              </div>
              <div id="row4">
                <Controller
                  name="neighborhood"
                  control={control}
                  render={({ field }) => (
                    <InputText
                      {...field}
                      placeholder="Bairro"
                      error={errors.neighborhood?.message}
                    />
                  )}
                />
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <InputText
                      {...field}
                      placeholder="Cidade"
                      error={errors.city?.message}
                    />
                  )}
                />
                <Controller
                  name="state"
                  control={control}
                  render={({ field }) => (
                    <InputText
                      {...field}
                      placeholder="UF"
                      error={errors.state?.message}
                    />
                  )}
                />
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
            <div>
              {formPayment.selectPayment === 'none' && (
                <p>Favor escolher uma forma de pagamento!</p>
              )}
            </div>
          </PaymentContainer>
        </AddressPaymentContainer>
        <OrderSummaryContainer>
          <h1>Cafés selecionados</h1>
          <OrderListBuy>
            {!!order &&
              !!cart &&
              cart.map((item) => {
                return (
                  <CoffeeCardCart
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    type={item.type}
                    quantity={item.quantity}
                    total={item.total}
                  />
                )
              })}
            <Line />
            <OrderSummary>
              <ItemOrderSummary>
                <span>Total de itens</span>
                <span>
                  R${String(totalItensCoffee.toFixed(2)).replace('.', ',')}
                </span>
              </ItemOrderSummary>
              <ItemOrderSummary>
                <span>Entrega</span>
                <span>R$3,50</span>
              </ItemOrderSummary>
              <ItemOrderSummary>
                <p>Total de itens</p>
                <p>R${String(totalPaid.toFixed(2)).replace('.', ',')}</p>
              </ItemOrderSummary>
              <ButtonPrimary onClick={handleSubmitEvent}>
                confirmar pedido
              </ButtonPrimary>
            </OrderSummary>
          </OrderListBuy>
        </OrderSummaryContainer>
        <DevTool control={control} /> {/* set up the dev tool */}
      </CheckoutContainer>
    </div>
  )
}

const Line = () => {
  return (
    <svg
      width="368"
      height="2"
      viewBox="0 0 368 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1H368" stroke="#E6E5E5" />
    </svg>
  )
}

const CheckoutContainer = styled.div`
  width: 1120px;
  height: auto;

  /* margin: 40px 0; */

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

const AddressForm = styled.form`
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
      input {
        text-transform: uppercase;
      }
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

    margin-top: 4px;

    /* Text/Regular S */
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
  }

  div:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      color: ${({ theme }) => theme['base-text']};

      margin-top: 4px;

      /* Text/Regular S */
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 18.2px */
    }
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
  width: 448px;

  display: flex;
  flex-direction: column;
  gap: 15px;

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

const OrderListBuy = styled.div`
  h1 {
    color: ${({ theme }) => theme['base-subtitle']};

    /* Title/Title XS */
    font-family: 'Baloo 2';
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 23.4px */
  }

  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  border-radius: 6px 44px;
  background: ${({ theme }) => theme['base-card']};
`

const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;

  button {
    display: inline-block;
    width: 100%;
  }
`
const ItemOrderSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  span:nth-child(1) {
    color: ${({ theme }) => theme['base-text']};
    text-align: right;

    /* Text/Regular S */
    font-family: 'Roboto';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
  }

  span:nth-child(2) {
    color: ${({ theme }) => theme['base-text']};
    text-align: right;

    /* Text/Regular M */
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 20.8px */
  }

  p {
    color: ${({ theme }) => theme['base-subtitle']};
    text-align: right;

    /* Text/Bold L */
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 26px */
  }
`
