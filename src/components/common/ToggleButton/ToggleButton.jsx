import { useState } from 'react';

import * as S from './ToggleButton.styles';

const ToggleButton = ({ children, items = [], className }) => {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggleButtonClick = event => {
    event.preventDefault();
    event.stopPropagation();
    setIsToggled(!isToggled);
  };

  return (
    <S.ToggleButtonLayout className={className} onBlur={() => setIsToggled(false)}>
      <S.ToggleButtonButton onClick={handleToggleButtonClick}>
        {children}
        <S.ToggleButtonItemBox>
          {isToggled && items.map(item => <S.ToggleButtonItem>{item}</S.ToggleButtonItem>)}
        </S.ToggleButtonItemBox>
      </S.ToggleButtonButton>
    </S.ToggleButtonLayout>
  );
};

export default ToggleButton;
