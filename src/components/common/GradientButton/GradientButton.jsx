import styles from './GradientButton.module.scss';

const GradientButton = ({ children, onClick, startColor, endColor }) => {
  return (
    <button
      className={styles.gradientButton}
      style={{ background: `linear-gradient(to right, ${startColor}, ${endColor})` }}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default GradientButton;
