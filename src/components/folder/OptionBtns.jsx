import shareIcon from 'assets/icon/share-icon.svg';
import strokeIcon from 'assets/icon/stroke-icon.svg';
import deleteIcon from 'assets/icon/delete-icon.svg';
import { styled } from 'styled-components';
import IconLabelButton from 'components/common/button/IconLabelButton';

const Styled = {
  Container: styled.div`
    display: flex;
    gap: 1.2rem;
  `,
};

const options = [
  { icon: shareIcon, label: '공유' },
  { icon: strokeIcon, label: '이름 변경' },
  { icon: deleteIcon, label: '삭제' },
];

function OptionBtns() {
  return (
    <Styled.Container>
      {options.map((option, index) => (
        <IconLabelButton
          key={index}
          icon={option.icon}
          label={option.label}
          onClick={() => console.log(`클릭 이벤트: ${option.label}`)}
        />
      ))}
    </Styled.Container>
  );
}

export default OptionBtns;
