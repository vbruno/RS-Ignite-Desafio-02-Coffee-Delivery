import { MapPin } from '@phosphor-icons/react'
import { ReactNode } from 'react'
import styled from 'styled-components'

interface IComponentProps {
  children: ReactNode
}

export const Location = ({ children, ...rest }: IComponentProps) => {
  return (
    <Container {...rest}>
      <MapPin className="icon" weight='fill' />
      {children}
    </Container>
  )
}

const Container = styled.div`
  display: flex;

  height: 38px;
  width: auto;

  align-items: center;
  justify-content: center;
  padding: 8px 8px;
  background: ${(props) => props.theme.purpleLight};
  border-radius: 6px;
  gap: 4px;
  border: none;

  color: ${(props) => props.theme.purpleDark};
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 130%;
  text-transform: uppercase;

  outline: 0;

  .icon {
    font-size: 16px;

    color: ${(props) => props.theme.purple};
  }

`
