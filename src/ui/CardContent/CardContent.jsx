import { CreatedAt, Description, ElapsedTime, StyledCardContent } from "./CardContentCss";

export const CardContent = ({ elapsedTime, description, createdAt, isHovered }) => {

  return (
    <StyledCardContent isHovered={isHovered}>
      <ElapsedTime>{elapsedTime}</ElapsedTime>
      <Description>{description}</Description>
      <CreatedAt>{createdAt}</CreatedAt>
    </StyledCardContent>
  );
};
