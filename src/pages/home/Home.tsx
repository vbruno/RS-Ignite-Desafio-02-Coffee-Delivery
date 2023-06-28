import { useEffect, useState } from 'react'
import { HomeContainer } from './styles'
import { ButtonPrimary } from '../../components/buttonPrimary/ButtonPrimary'

export function Home() {
  return (
    <HomeContainer>
      <ButtonPrimary>Label</ButtonPrimary>
    </HomeContainer>
  )
}
