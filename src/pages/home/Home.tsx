import { HomeContainer } from './styles'
import { ButtonPrimary } from '../../components/buttonPrimary/ButtonPrimary'
import { ButtonSecondary } from '../../components/buttonSecondary/ButtonSecondary'
import { ButtonState } from '../../components/buttonState/ButtonState'
import { ButtonCartState } from '../../components/buttonCartState/ButtonCartState'

export function Home() {
  return (
    <HomeContainer>
      <ButtonPrimary>Label</ButtonPrimary>
      <ButtonSecondary>Remover</ButtonSecondary>
      <ButtonState />
      <ButtonCartState value={0} visible={true} />
    </HomeContainer>
  )
}
