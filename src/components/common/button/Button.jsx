import buttonStyles from './Button.module.css';

export function Button({
  children,
  onClick,
  width = 'width100',
  isRed = false,
}) {
  let widthClass;
  switch (width) {
    case 'small':
      widthClass = buttonStyles.small;
      break;
    case 'normal':
      widthClass = buttonStyles.normal;
      break;
    default:
      widthClass = '';
  }
  const styles = `${buttonStyles.button} ${widthClass} ${
    isRed ? buttonStyles.red : ''
  }`;
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}
