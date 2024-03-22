import {
  ChangeEvent,
  useContext,
  useState,
  useRef,
  useEffect,
  useMemo,
} from 'react';
import { FolderContext } from '@/src/context/folderContext';
import { CategoryDataType, currentFolderDataType } from '@/src/type';
import {
  Wrapper,
  SearchWrapper,
  SearchInput,
  ImageIcon,
  AddButton,
} from './SubHeader.style';

interface Props {
  folderData: CategoryDataType | null;
  currentFolder: currentFolderDataType | null;
  type?: string;
  viewFooter?: boolean;
  viewSubHeader?: boolean;
  changeViewSubHeader?: (value: boolean) => void;
}

const SubHeader = ({
  folderData,
  currentFolder,
  type,
  viewFooter,
  viewSubHeader,
  changeViewSubHeader,
}: Props) => {
  const { changeModalData } = useContext(FolderContext);
  const [link, setLink] = useState<string>('');
  const wrapperRef = useRef(null);
  const options = useMemo(
    () => ({
      threshold: 0,
    }),
    [],
  );

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
      if (changeViewSubHeader) {
        if (entries[0].isIntersecting) {
          changeViewSubHeader(true);
        } else {
          changeViewSubHeader(false);
        }
      }
    };
    const observer = new IntersectionObserver(
      handleIntersectionObserver,
      options,
    );
    if (wrapperRef.current && !type) {
      observer.observe(wrapperRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [options, type, changeViewSubHeader]);

  return (
    <>
      <Wrapper
        $viewSubHeader={viewSubHeader}
        $viewFooter={viewFooter}
        $type={type}
      >
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

SubHeader.defaultProps = {
  type: '',
  viewSubHeader: true,
  viewFooter: true,
  changeViewSubHeader: () => {},
};

export default SubHeader;
