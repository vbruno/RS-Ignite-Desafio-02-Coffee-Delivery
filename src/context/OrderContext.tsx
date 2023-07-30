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

interface IOrderContextType {
  order: number
  setOrder: Dispatch<SetStateAction<number>>
  cart: ICoffee[] | undefined
  setCart: Dispatch<SetStateAction<ICoffee[]>>
}

export const OrderContext = createContext<IOrderContextType>(
  {} as IOrderContextType,
)

export function OrderContextProvider({ children }: { children: ReactNode }) {
  const [order, setOrder] = useState(0)

  const [cart, setCart] = useState<ICoffee[]>([] as ICoffee[])

  return (
    <OrderContext.Provider value={{ order, setOrder, cart, setCart }}>
      {children}
    </OrderContext.Provider>
  )
}
