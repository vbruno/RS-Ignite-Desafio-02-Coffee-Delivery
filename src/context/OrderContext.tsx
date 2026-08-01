import { ReactNode, useState } from 'react'
import {
  ICustomerRequest,
  ICoffee,
  IFormPayment,
  OrderContext,
} from './order-context'

export function OrderContextProvider({ children }: { children: ReactNode }) {
  const [order, setOrder] = useState(0)

  const [cart, setCart] = useState<ICoffee[]>([] as ICoffee[])

  const [formPayment, setFormPayment] = useState({
    selectPayment: 'none',
  } as IFormPayment)

  const [customerRequest, setCustomerRequest] = useState<ICustomerRequest>(
    {} as ICustomerRequest,
  )

  return (
    <OrderContext.Provider
      value={{
        order,
        setOrder,
        cart,
        setCart,
        formPayment,
        setFormPayment,
        customerRequest,
        setCustomerRequest,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
