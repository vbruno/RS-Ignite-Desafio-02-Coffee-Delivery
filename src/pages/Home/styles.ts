import styled from 'styled-components'

import background from '../../assets/images/Background.png'

export const HomeContainer = styled.div`
  height: 89vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const IntroContainer = styled.div`
  display: flex;

  width: 95vw;

  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  img {
    width: 476px;
    height: 360px;
  }
`

export const HomeWrapperIntro = styled.div`
  width: 1120px;
  height: 544px;

  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HomeTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-bottom: 66px;

  h1 {
    width: 588px;

    color: ${({ theme }) => theme['base-title']};

    /* Title/Title XL */
    font-family: 'Baloo 2';
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }

  h4 {
    width: 588px;

    color: ${({ theme }) => theme['base-subtitle']};

    /* Text/Regular L */
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`

export const HomeItems = styled.div`
  height: 84px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  gap: 20px 0;
`

export const HomeItem = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: start;

  gap: 12px;

  width: 294px;

  span {
    color: ${({ theme }) => theme['base-text']};

    /* Text/Regular M */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`

export const CoffeeListContainer = styled.div`
  h1 {
    width: 1120px;

    margin-top: 32px;
    margin-bottom: 54px;

    color: ${({ theme }) => theme['base-subtitle']};

    /* Title/Title L */
    font-family: 'Baloo 2';
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }
`

export const HomeWrapperCoffeeList = styled.div`
  width: 1120px;
  height: 1360px;

  display: flex;
  flex-wrap: wrap;
  justify-content: start;

  gap: 40px 32px;

  &::after {
    content: '';
    width: 100vw;
    height: 125px;
  }
`
