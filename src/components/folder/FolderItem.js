import Tab from './Tab';

const FolderItem = ({ folder, onClickFolder, isSelected }) => {
  const { name } = folder;
  return <Tab>{name}</Tab>;
};

export default FolderItem;
