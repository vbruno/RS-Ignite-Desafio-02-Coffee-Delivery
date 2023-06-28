import { Plus, Minus } from '@phosphor-icons/react'
import { InputNumberContainer } from './styles'
import { Dispatch, SetStateAction } from 'react'

interface IInputNumberProps {
  inputValue: number | 0
  outValue: Dispatch<SetStateAction<number>>
}

/**
 * @description Componente de input number
 * @param {number} inputValue - Valor do input
 * @param {Dispatch<SetStateAction<number>>} outValue - Função para alterar o valor do input
 * @example <InputNumber inputValue={number} outValue={setNumber} />
 *
 */
export const InputNumber = ({
  inputValue = 0,
  outValue,
}: IInputNumberProps) => {
  const handleMinus = () => {
    outValue((oldValue) => oldValue - 1)
  }

  const handlePlus = () => {
    outValue((oldValue) => oldValue + 1)
  }

  return (
    <InputNumberContainer>
      <Minus className="icone" size={14} weight="bold" onClick={handleMinus} />
      <span>{inputValue}</span>
      <Plus className="icone" size={14} weight="bold" onClick={handlePlus} />
    </InputNumberContainer>
  )
}
