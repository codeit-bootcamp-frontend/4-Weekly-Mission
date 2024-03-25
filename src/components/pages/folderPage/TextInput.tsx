import styled from 'styled-components';

const TextInput = styled.input`
  width: 100%;
  background-color: inherit;
  line-height: 2.4rem;
  font-size: 1.6rem;
  outline: none;

  @media (max-width: 767px) {
    line-height: 1.7rem;
    font-size: 1.4rem;
  }
`;

export default TextInput;
