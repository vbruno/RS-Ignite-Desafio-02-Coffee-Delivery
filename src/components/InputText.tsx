import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface IInputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  observation?: string
  error?: string
}

export const InputText = ({ observation, error, ...rest }: IInputTextProps) => {
  return (
    <Container>
      <ContainerInput {...rest} />
      {!!observation && <ContainerOpcional>{observation}</ContainerOpcional>}
      {!!error && <ContainerError>{error}</ContainerError>}
    </Container>
  )
}

const Container = styled.div`
  position: relative;

  width: 160px;
`
const ContainerInput = styled.input`
  width: 100%;
  padding: 12px;
  align-items: center;
  gap: 4px;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme['base-button']};
  /* border: 1px solid ${({ theme }) => theme['red-300']}; */
  background: ${({ theme }) => theme['base-input']};

  color: ${({ theme }) => theme['base-text']};

  /* Text/Regular S */
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 18.2px */

  caret-color: ${({ theme }) => theme['base-label']};

  &:focus,
  &:active {
    border: 0;
    outline: 1px solid ${({ theme }) => theme.yellowDark};
    background: ${({ theme }) => theme['base-input']};
  }

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};

    /* Text/Regular S */
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
  }
`
const ContainerOpcional = styled.span`
  position: absolute;
  top: 30%;
  right: 8%;

  color: var(--base-label, #8d8686);
  font-family: Roboto;
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  line-height: 130%; /* 15.6px */
`
const ContainerError = styled.span`
  position: absolute;
  top: 35px;
  left: 10px;
  color: ${({ theme }) => theme['red-300']};
  font-family: Roboto;
  font-size: 10px;
  font-style: italic;
  font-weight: 400;
  line-height: 130%; /* 15.6px */
  background: ${({ theme }) => theme['base-input']};
  border: 1px solid ${({ theme }) => theme['base-button']};
  padding: 1px 5px;
  border-radius: 4px;
  z-index: 1;
`
