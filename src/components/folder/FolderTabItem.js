import Tab from './Tab';

const FolderTabItem = ({ folder, setItem, isSelected }) => {
  const { name } = folder;
  return <Tab onClick={() => setItem({ id: folder.id, name: folder.name })}>{name}</Tab>;
};

export default FolderTabItem;
