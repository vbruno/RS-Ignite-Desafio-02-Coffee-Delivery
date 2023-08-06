import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

export interface ICoffee {
  // id: number
  name: string
  price: number
  // image: string
  quantity: number
  total: number
}

export interface IFormPayment {
  selectPayment: 'creditCard' | 'money' | 'bank' | 'none'
}

interface IOrderContextType {
  order: number
  setOrder: Dispatch<SetStateAction<number>>
  cart: ICoffee[] | undefined
  setCart: Dispatch<SetStateAction<ICoffee[]>>
  formPayment: IFormPayment
  setFormPayment: Dispatch<SetStateAction<IFormPayment>>
}

export const OrderContext = createContext<IOrderContextType>(
  {} as IOrderContextType,
)

export function OrderContextProvider({ children }: { children: ReactNode }) {
  const [order, setOrder] = useState(0)
  const [cart, setCart] = useState<ICoffee[]>([] as ICoffee[])
  const [formPayment, setFormPayment] = useState({
    selectPayment: 'none',
  } as IFormPayment)

  return (
    <OrderContext.Provider
      value={{
        order,
        setOrder,
        cart,
        setCart,
        formPayment,
        setFormPayment,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
