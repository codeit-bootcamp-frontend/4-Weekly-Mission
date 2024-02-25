import Tab from './Tab';

const FolderTabItem = ({ folder, onClickFolder, isSelected }) => {
  const { name } = folder;
  return <Tab>{name}</Tab>;
};

export default FolderTabItem;
