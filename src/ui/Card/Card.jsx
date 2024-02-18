import { StyledCard } from "./CardCss";

export const Card = ({ children, onMouseOver, onMouseLeave }) => {
  return (
    <StyledCard onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {children}
    </StyledCard>
  );
};
