import StyledButton from './GradientButton.styles';

const GradientButton = ({ children, startColor = 'var(--color-primary)', endColor = '#6ae3fe', onClick }) => {
  return (
    <StyledButton $startColor={startColor} $endColor={endColor} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default GradientButton;
