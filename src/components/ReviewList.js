import "./ReviewList.css";
function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewListItem({item, onDelete}) {
  const handleDeleteClick = () => {
    onDelete(item.id); // 선언도 되지않은 onDelete 함수가 어떻게 ReviewList 함수의 prop onDelete로 가는지 동작과정이 이해가 안갑니다...
  };

  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
}

function ReviewList({items, onDelete}) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ReviewListItem item={item} onDelete={onDelete} />
            <input></input>
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
