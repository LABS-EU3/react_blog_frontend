import styled from 'styled-components'

const Input = styled.input`
  background: #F1F3F4;
  border: none;
  outline: none;
  font-size: 0.8rem;
  display: inline-block;
  width: 100%;
  color: #69626D;
  &::-webkit-input-placeholder {
    font-weight: 100;
    font-style: italic;
    color: #69626D;
  }
`;

export default Input;