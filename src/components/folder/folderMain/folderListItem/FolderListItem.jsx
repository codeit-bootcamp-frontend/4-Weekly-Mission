import ListContainer from "./ListContainer";
import ListItem from "./listItem/ListItem";

function FolderListItem({
  folderListItem,
  handleListItemHover,
  mouseHoverkey,
  handleListItemMouseOut,
  handleDeleteLinkModal,
  handleAddModal,
}) {
  return (
    <>
      {folderListItem?.length > 0 ? (
        <>
          <ListContainer>
            {folderListItem?.map((item) => (
              <ListItem
                item={item}
                key={item.id}
                onHover={() => handleListItemHover(item.id)}
                hoverdId={mouseHoverkey}
                onMouseOut={handleListItemMouseOut}
                handleDeleteLinkModal={handleDeleteLinkModal}
                handleAddModal={handleAddModal}
              />
            ))}
          </ListContainer>
        </>
      ) : (
        <div>저장된 링크가 없습니다</div>
      )}
    </>
  );
}

export default FolderListItem;
