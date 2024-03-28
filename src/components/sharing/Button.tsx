import styled, { css } from "styled-components";
import React, { MouseEventHandler, ReactNode } from "react";

const buttonStyle = css`
  cursor: pointer;
  border: none;
`;

const GradientButton = styled.button`
  ${buttonStyle};
  padding: 13px 32px;

  background: linear-gradient(90.99deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  border-radius: 8px;
  color: var(--color-white);
`;

const Icon = styled.button`
  ${buttonStyle};
  background: none;
`;

const Text = styled.button`
  ${buttonStyle};
  //width: 100px;
  //height: 31px;
  //padding: 7px 12px 7px 12px;
  //
  //background: none;
  //font-size: 14px;
  //font-weight: 400;
  //
  //&:hover {
  //  background-color: var(--color-background);
  //  color: var(--color-primary);
  //}
`;

interface Props {
  children: ReactNode;
  className?: string;
  variant: "gradient" | "icon" | "text";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, className, variant, onClick }: Props) => {
  if (variant === "gradient")
    return (
      <GradientButton className={className} onClick={onClick}>
        {children}
      </GradientButton>
    );
  if (variant === "icon")
    return (
      <Icon onClick={onClick} className={className}>
        {children}
      </Icon>
    );
  if (variant === "text")
    return (
      <Text className={className} onClick={onClick}>
        {children}
      </Text>
    );
  return null;
};

export default Button;
