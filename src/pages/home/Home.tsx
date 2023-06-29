import { useEffect, useState } from 'react'
import { HomeContainer } from './styles'
import { ButtonPrimary } from '../../components/buttonPrimary/ButtonPrimary'
import { ButtonSecondary } from '../../components/buttonSecondary/ButtonSecondary'
import { ButtonState } from '../../components/buttonState/ButtonState'

export function Home() {
  return (
    <HomeContainer>
      <ButtonPrimary>Label</ButtonPrimary>
      <ButtonSecondary>Remover</ButtonSecondary>
      <ButtonState />
    </HomeContainer>
  )
}
