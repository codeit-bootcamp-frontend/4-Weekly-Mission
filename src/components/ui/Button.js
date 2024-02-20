import styled from 'styled-components';
import './Button.css';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  color: var(--Grey-Light, #f5f5f5);
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const BaseButton = ({ children, name }) => {
  return <Button className={`btn-${name}`}>{children}</Button>;
};

export default BaseButton;
