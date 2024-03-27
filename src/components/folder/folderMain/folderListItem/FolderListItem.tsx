import { FolderListItemProps } from "../../../../@types/FolderListItem";
import ListContainer from "./ListContainer";
import ListItem from "./listItem/ListItem";

function FolderListItem({
  folderListItem,
  onModal,
  filterdFolderListItem,
  value,
}: FolderListItemProps) {
  const itemstoRender = value ? filterdFolderListItem : folderListItem;
  const hasItemsToRender = itemstoRender?.length;

  return (
    <>
      {hasItemsToRender > 0 ? (
        <>
          <ListContainer>
            {itemstoRender.map((item) => (
              <ListItem item={item} key={item.id} onModal={onModal} />
            ))}
          </ListContainer>
        </>
      ) : (
        <div style={{ paddingBottom: `200px` }}>저장된 링크가 없습니다</div>
      )}
    </>
  );
}

export default FolderListItem;
