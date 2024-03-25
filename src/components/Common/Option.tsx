import classNames from 'classnames';

import Button from 'components/Common/Button';
import styles from 'components/Common/Option.module.css';

interface OptionProps {
  imageUrl: string;
  text: string;
  className?: string;
  onClick: () => void;
}

function Option({ imageUrl, text, className = '', onClick }: OptionProps) {
  const optionClasses = classNames(
    styles.option,
    'flex-row',
    'align-center',
    'text-color-gray60',
    'border-none',
    'background-none',
    className
  );
  const optionImageClasses = classNames(styles['option-image']);

  return (
    <Button className={optionClasses} onClick={onClick}>
      <img className={optionImageClasses} src={imageUrl} alt={text} />
      {text}
    </Button>
  );
}

export default Option;
