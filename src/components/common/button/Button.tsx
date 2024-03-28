import buttonStyles from './Button.module.css';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  width?: 'small' | 'normal' | string;
  isRed?: boolean;
}
const Button: React.FC<Props> = ({
  children,
  onClick,
  width = 'width100',
  isRed = false,
}) => {
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
};

export { Button };
