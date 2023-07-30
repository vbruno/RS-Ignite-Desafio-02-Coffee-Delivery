import americano from './images/americano.png'
import arabe from './images/arabe.png'
import cafeComLeite from './images/cafe-com-leite.png'
import cafeGelado from './images/cafe-gelado.png'
import capuccino from './images/capuccino.png'
import chocolateQuente from './images/chocolate-quente.png'
import cubano from './images/cubano.png'
import expressoCremoso from './images/expresso-cremoso.png'
import expresso from './images/expresso.png'
import havaiano from './images/havaiano.png'
import irlandes from './images/irlandês.png'
import latte from './images/latte.png'
import macchiato from './images/machhiato.png'
import macaccino from './images/mochaccino.png'

export interface ICoffeeType {
  type: string
  img: string
  tag: string[]
  title: string
  content: string
  price: number
}

export const imgCoffee = {
  expressoTradicional: expresso,
  expressoAmericano: americano,
  expressoCremoso,
  expressoGelado: cafeGelado,
  cafeComLeite,
  latte,
  capuccino,
  macchiato,
  macaccino,
  chocolateQuente,
  cubano,
  havaiano,
  arabe,
  irlandes,
}

export const coffeeType: ICoffeeType[] = [
  {
    type: 'expressoTradicional',
    img: 'expresso',
    tag: ['tradicional'],
    title: 'Expresso Tradicional',
    content: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    type: 'expressoAmericano',
    img: 'americano',
    tag: ['tradicional'],
    title: 'Expresso Americano',
    content: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    type: 'expressoCremoso',
    img: 'expresso-cremoso',
    tag: ['tradicional'],
    title: 'Expresso Cremoso',
    content: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    type: 'expressoGelado',
    img: 'cafe-gelado',
    tag: ['tradicional', 'gelado'],
    title: 'Expresso Gelado',
    content: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    type: 'cafeComLeite',
    img: 'cafe-com-leite',
    tag: ['tradicional', 'com leite'],
    title: 'Café com Leite',
    content: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    type: 'latte',
    img: 'latte',
    tag: ['tradicional', 'com leite'],
    title: 'Latte',
    content: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    type: 'capuccino',
    img: 'capuccino',
    tag: ['tradicional', 'com leite'],
    title: 'Capucciono',
    content: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    type: 'macchiato',
    img: 'macchiato',
    tag: ['tradicional', 'com leite'],
    title: 'Macchiato',
    content: 'Café expresso com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    type: 'macaccino',
    img: 'macaccino',
    tag: ['tradicional', 'com leite'],
    title: 'Macaccino',
    content: 'Café expresso com calda de chocolate, pouco de leite e espuma',
    price: 9.9,
  },
  {
    type: 'chocolateQuente',
    img: 'chocolate-quente',
    tag: ['especial', 'com leite'],
    title: 'Chocholate Quente',
    content: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    type: 'cubano',
    img: 'cubano',
    tag: ['especial', 'alcoólico', 'gelado'],
    title: 'Cubano',
    content: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    type: 'havaiano',
    img: 'havaiano',
    tag: ['especial'],
    title: 'Havaiano',
    content: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    type: 'arabe',
    img: 'arabe',
    tag: ['especial'],
    title: 'Árabe',
    content: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    type: 'irlandes',
    img: 'irlandes',
    tag: ['especial', 'alcoólico'],
    title: 'Irlandês',
    content: 'Bebida a base de café, uísque irlandês, açúcar e Chantilly',
    price: 9.9,
  },
]
