import styled from 'styled-components'

import logo from '../../assets/images/Logo.svg'
import { ButtonCartState, Location } from '..'

export function Navbar() {
  return (
    <NavbarContainer>
      <img src={logo} alt="Logo" />
      <div>
        <Location> Porto Alegre, RS</Location>
        <ButtonCartState />
      </div>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  margin: 32px 160px;

  width: 1120px;

  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`
