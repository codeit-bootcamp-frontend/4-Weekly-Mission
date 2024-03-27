import buttonStyles from './Button.module.css';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  width?: string;
  isRed?: boolean;
}
export function Button({
  children,
  onClick,
  width = 'width100',
  isRed = false,
}: Props) {
  let widthClass: string;
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
  const styles: string = `${buttonStyles.button} ${widthClass} ${
    isRed ? buttonStyles.red : ''
  }`;
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}
