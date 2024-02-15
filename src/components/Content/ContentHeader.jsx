import ShareIcon from '../../assets/category-share.svg';
import ModifyIcon from '../../assets/category-modify.svg';
import DeleteIcon from '../../assets/category-delete.svg';

const categoryControlList = [
  {
    img: ShareIcon,
    actionText: "폴더 공유",
    text: "공유"
  },
  {
    img: ModifyIcon,
    actionText: "폴더 이름 변경",
    text: "수정"
  },
  {
    img: DeleteIcon,
    actionText: "폴더 삭제",
    text: "삭제"
  }
]

function ContentHeader({ selectCategory, setModalAction }) {
  const isControlVisible = selectCategory.name !== "전체";

  const handleModalAction = (action) => {
    setModalAction({
      isView: true,
      action,
      subTitle: selectCategory.name,
    });
  };
  
  return (
    <div className='content__header'>
      <p className='content__title'>{selectCategory.name}</p>
      {isControlVisible && 
      <ul className='content__util'>
      {categoryControlList.map((list, idx) => {
        return (
        <li key={idx} className='content__util--list' onClick={() => handleModalAction(list.actionText)}>
        <img className='content__util--img' src={list.img} alt={`${list.text} 이미지`} />
        <span className='content__util--text'>{list.text}</span>
      </li>)
      })}
    </ul>}
    </div>
  );
}

export default ContentHeader;
