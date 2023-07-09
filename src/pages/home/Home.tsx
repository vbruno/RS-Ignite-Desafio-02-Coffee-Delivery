import { CoffeeListContainer, HomeContainer, IntroContainer, NavbarContainer } from './styles'

import logo from '../../assets/images/Logo.svg'
import imgCoffee from '../../assets/images/Imagem.png'

import { ButtonCartState, CoffeeCardCatalog, Location } from '../../components'
import { ItemIcon } from '../../components/itemIcon/ItemIcon'

import { defaultTheme } from '../../styles/themes/default'

export function Home() {
  return (
    <HomeContainer>
      <NavbarContainer>
        <img src={logo} alt="Logo" />
        <div>
          <Location> Porto Alegre, RS</Location>
          <ButtonCartState />
        </div>
      </NavbarContainer>
      <IntroContainer>
        <div className='wrapperIntro'>
          <div>
            <div className='title'>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <h4>Com o coffee você recebe seu café onde estiver, a qualquer hora</h4>
            </div>
            <div className='items'>
              <div className='item'>
                <ItemIcon icon='shoppingCart' cor={defaultTheme.yellowDark} />
                <span>Compra simples e segura</span>
              </div>
              <div className='item'>
                <ItemIcon icon='timer' cor={defaultTheme.yellow} />
                <span>Entrega rápida e rastreada</span>
              </div>
              <div className='item'>
                <ItemIcon icon='package' cor={defaultTheme['base-text']} />
                <span>Embalagem mantém o café intacto</span>
              </div>
              <div className='item'>
                <ItemIcon icon='coffee' cor={defaultTheme.purple} />
                <span>O café chega fresquinho até vocês</span>
              </div>
            </div>
          </div>
          <img src={imgCoffee} alt="" />
        </div>

      </IntroContainer>
      <CoffeeListContainer>
        <h1>Nossos Cafés</h1>
        <div className='wrapperCoffeeList'>
          <CoffeeCardCatalog type='expressoTradicional' />
          <CoffeeCardCatalog type='expressoAmericano' />
          <CoffeeCardCatalog type='expressoCremoso' />
          <CoffeeCardCatalog type='expressoGelado' />
          <CoffeeCardCatalog type='cafeComLeite' />
          <CoffeeCardCatalog type='latte' />
          <CoffeeCardCatalog type='capuccino' />
          <CoffeeCardCatalog type='macchiato' />
          <CoffeeCardCatalog type='macaccino' />
          <CoffeeCardCatalog type='chocolateQuente' />
          <CoffeeCardCatalog type='cubano' />
          <CoffeeCardCatalog type='havaiano' />
          <CoffeeCardCatalog type='arabe' />
          <CoffeeCardCatalog type='irlandes' />
        </div>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
