function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function FolderListItem({ item }) {
  const { title, createdAt, url, description, imageSource } = item;

  return (
    <div className="FolderListItem">
      <div>{title}</div>
      <div>{url}</div>
      <div>{description}</div>
      <img src={imageSource} alt={title} />
      <div>{formatDate(createdAt)}</div>
    </div>
  );
}

function FolderList({ items }) {
  return (
    <ul className="FolderList">
      {items.map((item) => (
        <li key={item.id}>
          <FolderListItem item={item} />
        </li>
      ))}
    </ul>
  );
}

export default FolderList;
