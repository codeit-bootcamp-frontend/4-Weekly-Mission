import youtubeIcon from 'assets/icon/youtube-icon.svg';
import closeIcon from 'assets/icon/close-icon.svg';
import shareIcon from 'assets/icon/share-icon.svg';
import strokeIcon from 'assets/icon/stroke-icon.svg';
import deleteIcon from 'assets/icon/delete-icon.svg';

import BUTTON_TYPE from 'constants/BUTTON_TYPE';
import PLACEHOLDER from 'constants/FORM_MESSAGE';
import Button from 'components/common/button/Button';
import TabButton from 'components/common/button/TabButton';
import IconButton from 'components/common/button/IconButton';
import IconLabelButton from 'components/common/button/IconLabelButton';
import AddLinkBar from 'components/AddLinkBar';

const tabInfo = [
  {
    title: '전체',
    func: () => {
      console.log('전체');
    },
  },
  {
    title: '⭐️ 즐겨찾기',
    func: () => {
      console.log('즐찾');
    },
  },
  {
    title: '코딩 팁',
    func: () => {
      console.log('코딩 팁');
    },
  },
  {
    title: '채용 사이트',
    func: () => {
      console.log('채용 사이트');
    },
  },
  {
    title: '유용한 글',
    func: () => {
      console.log('유용한 글');
    },
  },
];

function Test() {
  return (
    <>
      <Button>로그인</Button>
      <Button styleType={BUTTON_TYPE.DELETE}>삭제하기</Button>
      <TabButton tabInfo={tabInfo} />
      <IconButton icon={youtubeIcon} />
      <IconButton icon={closeIcon} style={{ width: '2.4rem', height: '2.4rem', backgroundColor: '#E7EFFB' }} />
      <IconLabelButton icon={shareIcon} label="공유" />
      <IconLabelButton icon={strokeIcon} label="이름 변경" />
      <IconLabelButton icon={deleteIcon} label="삭제" />
      <AddLinkBar placeholder={PLACEHOLDER.ADD_LINK} />
    </>
  );
}

export default Test;
