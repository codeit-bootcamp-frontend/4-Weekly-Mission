import StyledText from './GradientText.styles';

const GradientText = ({ children, startColor = 'var(--color-primary)', endColor = '#ff9f9f' }) => {
  return (
    <StyledText $startColor={startColor} $endColor={endColor}>
      {children}
    </StyledText>
  );
};

export default GradientText;
