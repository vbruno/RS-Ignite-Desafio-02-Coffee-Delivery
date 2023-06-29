import styled from 'styled-components'

export const InputNumberContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 32px;
  padding: 8px;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  flex-shrink: 0;

  .icon {
    color: ${(props) => props.theme.purple};

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.purpleDark};
    }
  }

  span {
    width: 20px;

    display: flex;
    height: auto;
    align-items: center;
    justify-content: center;

    text-align: center;
    color: ${(props) => props.theme['base-title']};

    /* Text/Regular M */
    font-size: 16px;
    font-family: roboto;
    line-height: 130%;
  }
`
