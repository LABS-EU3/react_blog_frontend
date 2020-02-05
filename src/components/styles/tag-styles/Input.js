import styled from 'styled-components'
import theme from '../../../styles/theme'

const Input = styled.input`
  background: transparent:
  font-family: ${theme.fonts.Muli} !important;
  font-size: 13px;
  font-weight: 500;
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
  &::-webkit-input-placeholder {
    font-weight: 100;
    font-size: 13px;
    color: #69626D;
  }
`;

export default Input;