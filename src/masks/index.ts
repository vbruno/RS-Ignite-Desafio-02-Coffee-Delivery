export const normalizePhoneNumber = (value: string | undefined) => {
  if (!value) return ''

  return value
    .replace(/[\D]/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})(\d+?)/, '$1')
}

export const normalizeCNPJNumber = (value: string | undefined) => {
  if (!value) return ''

  return value
    .replace(/[\D]/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{2})\d+?$/, '$1')
}

export const normalizeCPFNumber = (value: string | undefined) => {
  if (!value) return ''

  return value
    .replace(/[\D]/g, '')
    .replace(/(\d{3})(\d)/, '$1 $2')
    .replace(/(\d{3})(\d)/, '$1 $2')
    .replace(/(\d{3})(\d)/, '$1-$2')
  // .replace(/(\d{2})\d+?$/, "$1");
}

export const normalizeCepNumber = (value: string | undefined) => {
  if (!value) return ''
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{5})(\d{3})+?$/, '$1-$2')
    .replace(/(-\d{3})(\d+?)/, '$1')
}

export const normalizeDate = (value: string | undefined) => {
  if (!value) return ''
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1')
}

// Aceita apenas que letras sejam digitadas
export const maskOnlyLetters = (value: string) => {
  return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, '')
}

// Aceita apenas números
export const maskOnlyNumbers = (value: string) => {
  return value.replace(/\D/g, '')
}
