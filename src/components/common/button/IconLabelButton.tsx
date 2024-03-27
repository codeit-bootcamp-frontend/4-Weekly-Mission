import { HTMLAttributes } from 'react';
import { styled } from 'styled-components';

const Styled = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;
  `,

  Label: styled.span`
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.gray4};
  `,
};

interface IconLabelButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: string;
  label: string;
  onClick: () => void;
}

function IconLabelButton({ icon, label, onClick }: IconLabelButtonProps) {
  return (
    <Styled.Container as="button" onClick={onClick}>
      <img src={icon} alt={icon} />
      <Styled.Label>{label}</Styled.Label>
    </Styled.Container>
  );
}

export default IconLabelButton;
