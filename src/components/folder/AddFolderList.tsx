import { useState } from 'react';
import { styled } from 'styled-components';

import checkIcon from 'assets/icon/check-icon.svg';

const Styled = {
  FolderList: styled.ul`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  `,

  Folder: styled.li`
    padding: 0.8rem;
    border-radius: 0.8rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
      background-color: ${({ theme }) => theme.color.background};
    }

    &.selected {
      background-color: ${({ theme }) => theme.color.background};

      .folder-name,
      .check-icon {
        color: ${({ theme }) => theme.color.primary};
        display: block;
      }
    }
  `,

  TextInfo: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
  `,

  Name: styled.span`
    color: #373740;
    line-height: 2.4rem;
  `,

  LinkCount: styled.span`
    font-size: 1.4rem;
    color: ${({ theme }) => theme.color.gray4};
  `,

  Check: styled.div`
    display: none;
  `,
};

// mock data
const folderInfo = [
  { name: '코딩팁', linkCount: 7 },
  { name: '채용 사이트', linkCount: 12 },
  { name: '유용한 글', linkCount: 30 },
  { name: '나만의 장소', linkCount: 3 },
];

interface FolderInfo {
  name: string;
  linkCount: number;
}

interface AddFolderListProps {
  onSelectFolder: (folder: FolderInfo) => void;
}

function AddFolderList({ onSelectFolder }: AddFolderListProps) {
  const [selectedFolder, setSelectedFolder] = useState<number | null>(null);

  const handleClickFolder = (idx: number) => {
    setSelectedFolder(idx);
    console.log(`${folderInfo[idx].name} 선택`);
    onSelectFolder(folderInfo[idx]);
  };

  return (
    <Styled.FolderList>
      {folderInfo.map((folder, idx) => (
        <Styled.Folder
          key={idx}
          onClick={() => handleClickFolder(idx)}
          className={selectedFolder === idx ? 'selected' : ''}
        >
          <Styled.TextInfo>
            <Styled.Name className="folder-name">{folder.name}</Styled.Name>
            <Styled.LinkCount>{`${folder.linkCount}개 링크`}</Styled.LinkCount>
          </Styled.TextInfo>
          <Styled.Check className="check-icon">
            <img src={checkIcon} alt="체크 아이콘" />
          </Styled.Check>
        </Styled.Folder>
      ))}
    </Styled.FolderList>
  );
}

export default AddFolderList;
