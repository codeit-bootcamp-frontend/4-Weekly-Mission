import StyledButton from './GradientButton.styles';

const GradientButton = ({ children, startColor = 'var(--color-primary)', endColor = '#6ae3fe' }) => {
  return (
    <StyledButton $startColor={startColor} $endColor={endColor}>
      {children}
    </StyledButton>
  );
};

export default GradientButton;
