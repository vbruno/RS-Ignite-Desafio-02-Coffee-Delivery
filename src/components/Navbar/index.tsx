import styled from 'styled-components'

import logo from '../../assets/images/Logo.svg'
import { ButtonCartState, Location } from '..'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { OrderContext } from '../../context/OrderContext'

export function Navbar() {
  const navigate = useNavigate()

  const { order } = useContext(OrderContext)

  return (
    <NavbarContainer>
      <img src={logo} alt="Logo" onClick={() => navigate('/')} />
      <div>
        <Location> Porto Alegre, RS</Location>
        <ButtonCartState
          value={order}
          visible={order > 0}
          onClick={() => navigate('/checkout')}
        />
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
