import styled from 'styled-components'
import { Navbar } from '../../components'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <Container>
      <Navbar />
      <div style={{ overflowY: 'auto' }}>
        <Outlet />
      </div>
    </Container>
  )
}

const Container = styled.div`
  /* width: 1120px; */
  /* height: 1456px; */
  /* height: calc(100vh - 10rem); */

  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
