import {
  CoffeeListContainer,
  HomeContainer,
  HomeItem,
  HomeItems,
  HomeTitle,
  HomeWrapperCoffeeList,
  HomeWrapperIntro,
  IntroContainer,
} from './styles'

import imgCoffee from '../../assets/images/Imagem.png'

import { CoffeeCardCatalog } from '../../components'
import { ItemIcon } from '../../components/itemIcon/ItemIcon'

import { defaultTheme } from '../../styles/themes/default'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <HomeWrapperIntro>
          <div>
            <HomeTitle>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <h4>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </h4>
            </HomeTitle>
            <HomeItems>
              <HomeItem>
                <ItemIcon icon="shoppingCart" cor={defaultTheme.yellowDark} />
                <span>Compra simples e segura</span>
              </HomeItem>
              <HomeItem>
                <ItemIcon icon="timer" cor={defaultTheme.yellow} />
                <span>Entrega rápida e rastreada</span>
              </HomeItem>
              <HomeItem>
                <ItemIcon icon="package" cor={defaultTheme['base-text']} />
                <span>Embalagem mantém o café intacto</span>
              </HomeItem>
              <HomeItem>
                <ItemIcon icon="coffee" cor={defaultTheme.purple} />
                <span>O café chega fresquinho até vocês</span>
              </HomeItem>
            </HomeItems>
          </div>
          <img src={imgCoffee} alt="" />
        </HomeWrapperIntro>
      </IntroContainer>
      <CoffeeListContainer>
        <h1>Nossos Cafés</h1>
        <HomeWrapperCoffeeList>
          <CoffeeCardCatalog type="expressoTradicional" />
          <CoffeeCardCatalog type="expressoAmericano" />
          <CoffeeCardCatalog type="expressoCremoso" />
          <CoffeeCardCatalog type="expressoGelado" />
          <CoffeeCardCatalog type="cafeComLeite" />
          <CoffeeCardCatalog type="latte" />
          <CoffeeCardCatalog type="capuccino" />
          <CoffeeCardCatalog type="macchiato" />
          <CoffeeCardCatalog type="macaccino" />
          <CoffeeCardCatalog type="chocolateQuente" />
          <CoffeeCardCatalog type="cubano" />
          <CoffeeCardCatalog type="havaiano" />
          <CoffeeCardCatalog type="arabe" />
          <CoffeeCardCatalog type="irlandes" />
        </HomeWrapperCoffeeList>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
