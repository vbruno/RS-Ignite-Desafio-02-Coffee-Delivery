import { HomeContainer } from './styles'
import {
  ButtonCartState,
  ButtonPrimary,
  ButtonSecondary,
  ButtonSelect,
  ButtonState,
} from '../../components'

export function Home() {
  return (
    <HomeContainer>
      <ButtonPrimary>Label</ButtonPrimary>
      <ButtonSecondary>Remover</ButtonSecondary>
      <ButtonState />
      <ButtonCartState value={0} visible={true} />
      <ButtonSelect Icon="creditCard">cartão de crédito</ButtonSelect>
    </HomeContainer>
  )
}
