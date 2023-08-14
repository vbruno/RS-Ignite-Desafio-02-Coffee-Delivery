import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

export interface Order {
  id: number
  name: string
  price: number
  quantity: number
  type: string
  total: number
}

export interface ICustomerRequest {
  cep: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  totalPaid: number
  order: Order[]
  formPayment: string
}

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
  cart: ICoffee[]
  setCart: Dispatch<SetStateAction<ICoffee[]>>
  formPayment: IFormPayment
  setFormPayment: Dispatch<SetStateAction<IFormPayment>>
  customerRequest: ICustomerRequest
  setCustomerRequest: Dispatch<SetStateAction<ICustomerRequest>>
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
