import { CoffeeCardCatalog } from '../../components'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer style={{ display:'flex', flexDirection:'row', flexWrap: 'wrap', gap:'40px 32px'}} >
      <CoffeeCardCatalog type='arabe'/>
      <CoffeeCardCatalog type='cafeComLeite'/>
      <CoffeeCardCatalog type='capuccino'/>
      <CoffeeCardCatalog type='chocolateQuente'/>
      <CoffeeCardCatalog type='cubano'/>
      <CoffeeCardCatalog type='expressoAmericano'/>
      <CoffeeCardCatalog type='expressoCremoso'/>
      <CoffeeCardCatalog type='expressoGelado'/>
      <CoffeeCardCatalog type='expressoTradicional'/>
      <CoffeeCardCatalog type='havaiano'/>
      <CoffeeCardCatalog type='irlandes'/>
      <CoffeeCardCatalog type='latte'/>
      <CoffeeCardCatalog type='macaccino'/>
      <CoffeeCardCatalog type='macchiato'/>
    </HomeContainer>
  )
}
