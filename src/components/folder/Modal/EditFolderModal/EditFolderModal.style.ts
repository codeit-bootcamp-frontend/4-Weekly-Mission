import styled from 'styled-components';
import COLOR from '@/styles/color';
import FONT from '@/styles/font';

const InputText = styled.input`
  width: 100%;
  border: 1px solid ${COLOR.Gray2};
  height: 60px;
  border-radius: 8px;
  padding: 18px 15px;
  ${FONT.REGULAR_16};
  color: ${COLOR.Gray3};
  outline: none;

  &:focus {
    border-color: ${COLOR.Primary};
  }
`;

export default InputText;
