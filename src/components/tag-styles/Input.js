import styled from 'styled-components'

const Input = styled.input`
  background: transparent:
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