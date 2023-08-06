import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

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

export interface ICoffee {
  id: number
  name: string
  price: number
  type: ITypeCoffee['type']
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
  const [order, setOrder] = useState(1)
  const [cart, setCart] = useState<ICoffee[]>([
    {
      id: 1691347668231,
      name: 'Expresso Tradicional',
      price: 9.9,
      quantity: 1,
      type: 'expressoCremoso',
      total: 9.9,
    },
  ] as ICoffee[])
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
