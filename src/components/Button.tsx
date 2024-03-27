import styled from 'styled-components';

const Button = styled.button<{ fontSize?: string }>`
  width: 80px;
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  border: none;
  color: var(--Grey-Light, #f5f5f5);
  font-family: Pretendard;
  font-size: ${(props) => props.fontSize || '14px'};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;
  cursor: pointer;
`;

export default Button;
