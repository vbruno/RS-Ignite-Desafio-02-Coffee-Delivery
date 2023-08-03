import { useCallback } from 'react'
import styled from 'styled-components'

import {
  ShoppingCart,
  Timer,
  Package,
  Coffee,
  MapPin,
  CurrencyDollar,
} from '@phosphor-icons/react'

interface IComponentProps {
  icon:
    | 'shoppingCart'
    | 'timer'
    | 'package'
    | 'coffee'
    | 'mapPin'
    | 'currencyDollar'
  cor: string
}

export const ItemIcon = ({ icon, cor = '#fff', ...rest }: IComponentProps) => {
  const renderIcon = useCallback(() => {
    switch (icon) {
      case 'shoppingCart':
        return <ShoppingCart color="#FFF" weight="fill" {...rest} />
      case 'timer':
        return <Timer color="#FFF" weight="fill" {...rest} />
      case 'package':
        return <Package color="#FFF" weight="fill" {...rest} />
      case 'coffee':
        return <Coffee color="#FFF" weight="fill" {...rest} />
      case 'mapPin':
        return <MapPin color="#FFF" weight="fill" {...rest} />
      case 'currencyDollar':
        return <CurrencyDollar color="#FFF" {...rest} />
      default:
        return null
    }
  }, [icon, rest])

  return (
    <Container style={{ background: cor }} {...rest}>
      {renderIcon()}
    </Container>
  )
}

const Container = styled.div`
  display: flex;

  width: 32px;
  height: 32px;

  align-items: center;
  justify-content: center;
  padding: 8px;
  /* background: ${(props) => props.theme.purpleLight}; */
  border-radius: 50%;
  gap: 4px;
  border: none;

  color: ${(props) => props.theme.purpleDark};
`
