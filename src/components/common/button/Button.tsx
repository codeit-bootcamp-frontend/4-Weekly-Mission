import { HTMLAttributes } from 'react';
import { styled } from 'styled-components';
import BUTTON_TYPE from 'constants/BUTTON_TYPE';

const Styled = {
  Button: styled.button<{ $styleType?: string }>`
    padding: 1.6rem 2rem;
    border-radius: 0.8rem;
    white-space: nowrap;
    font-weight: 600;
    color: ${({ theme }) => theme.color.white};

    background: ${({ $styleType, theme }) =>
      $styleType === BUTTON_TYPE.DELETE ? theme.color.red : theme.color.mainGradient};
  `,
};

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  styleType?: string;
}

/**
 * Button - 공통 버튼 컴포넌트
 * @param {React.ReactNode} children
 * @param {React.htmlAttributes} htmlButtonProps 기타 버튼 props
 */
function Button({ children, styleType, ...htmlButtonProps }: ButtonProps) {
  return (
    <Styled.Button type="button" $styleType={styleType} {...htmlButtonProps}>
      {children}
    </Styled.Button>
  );
}

export default Button;
