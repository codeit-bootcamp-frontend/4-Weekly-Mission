import { ChangeEvent, useContext, useState, useRef, useEffect } from 'react';
import folderContext from '@/src/context/folderContext';
import { CategoryDataType } from '@/src/type';
import {
  Wrapper,
  SearchWrapper,
  SearchInput,
  ImageIcon,
  AddButton,
} from './SubHeader.style';

interface folderDataType {
  title: string | null;
  id: string | null;
}

interface Props {
  folderData: CategoryDataType | null;
  currentFolder: folderDataType | null;
  viewFooter: boolean;
}

const SubHeader = ({ folderData, currentFolder, viewFooter }: Props) => {
  const { changeModalData } = useContext(folderContext);
  const [link, setLink] = useState<string>('');
  const [fix, setFix] = useState<boolean>(false);
  const wrapperRef = useRef(null);
  const options = { threshold: 0 };

  const folderCategory = folderData?.category?.map((category) => ({
    folderName: String(category.name),
    folderID: Number(category.id),
    linkCount: category.link ? category.link.count : 0,
  }));

  const folder = folderCategory
    ? [{ folderName: '전체', folderID: 0, linkCount: 3 }, ...folderCategory]
    : undefined;
  const currentFolderID = currentFolder ? Number(currentFolder.id) : null;
  const changeLink = (e: ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };
  const openModal = () => {
    changeModalData({
      modalType: 'AddFolderModal',
      subTitle: link ? `https://${link}` : '',
      folder,
      currentFolderID,
      currentLinkID: null,
    });
  };
  useEffect(() => {
    const handleIntersectionObserver = (
      entries: IntersectionObserverEntry[],
    ) => {
      if (!entries[0].isIntersecting) {
        setFix(true);
      } else {
        setFix(false);
      }
    };
    const observer = new IntersectionObserver(
      handleIntersectionObserver,
      options,
    );
    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [options]);

  return (
    <>
      <Wrapper $fix={fix} $viewFooter={viewFooter}>
        <SearchWrapper>
          <SearchInput
            placeholder="링크를 추가해보세요"
            onChange={changeLink}
          />
          <ImageIcon src="/images/link.svg" alt="링크" width={20} height={20} />
          <AddButton onClick={openModal}>추가하기</AddButton>
        </SearchWrapper>
      </Wrapper>
      <div ref={wrapperRef} />
    </>
  );
};

export default SubHeader;
