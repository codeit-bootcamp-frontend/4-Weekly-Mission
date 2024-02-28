import styles from './GradientText.module.scss';
const GradientText = ({ children, startColor, endColor }) => {
  return (
    <span
      className={styles.gradientText}
      style={{
        background: `linear-gradient(to right, ${startColor}, ${endColor})`,
        backgroundClip: 'text'
      }}>
      {children}
    </span>
  );
};

export default GradientText;
