import { FolderNameButton } from 'ui/FolderList/FolderNameButton';
import {
  AddButtonWrapper,
  BlankDiv,
  Button,
  ButtonBar,
  ButtonText,
  FolderButtonWrapper,
  FolderNameBar,
  FolderNameList,
  Name,
  NameContainer
} from 'ui/FolderList/FolderListCss';
import { AddFolderButton } from 'ui/FolderList/AddFolderButton';
import { ICON_DATA } from './constant';

const FolderList = ({ folderData, isClicked, onFolderButtonClick }) => {
  return (
    <>
      <FolderNameList>
        <FolderButtonWrapper>
          <FolderNameButton
            key={"1"}
            name={"전체"}
            onClick={() => onFolderButtonClick("전체")}
          />
          {folderData?.map((data) => (
            <FolderNameButton
              key={data.id}
              name={data.name}
              onClick={() => onFolderButtonClick(data.name)} />
          ))}
        </FolderButtonWrapper>
        <AddButtonWrapper>
          <AddFolderButton />
        </AddButtonWrapper>
      </FolderNameList>
      <FolderNameBar>
        <NameContainer>
          <Name>{isClicked}</Name>
        </NameContainer>
        <BlankDiv />
        <ButtonBar>
          {ICON_DATA.map(({ icon, text }, index) => (
            <Button key={index}>
              {icon}
              <ButtonText>{text}</ButtonText>
            </Button>
          ))}
        </ButtonBar>
      </FolderNameBar>
    </>
  );
};

export default FolderList;