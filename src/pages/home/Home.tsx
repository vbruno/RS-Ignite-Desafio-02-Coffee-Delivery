import { CoffeeCardCatalog } from '../../components'
import { CoffeeCardCart } from '../../components/coffeeCard/CoffeeCardCart'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <CoffeeCardCatalog />
      <CoffeeCardCart />
    </HomeContainer>
  )
}
