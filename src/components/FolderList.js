function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function FolderListItem({ item }) {
  const { title, createdAt } = item;

  return (
    <div className="FolderListItem">
      {/* <img src={imgUrl} alt={title} /> */}
      <div>{title}</div>
      {/* <div>{calorie}</div>
      <div>{content}</div> */}
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
