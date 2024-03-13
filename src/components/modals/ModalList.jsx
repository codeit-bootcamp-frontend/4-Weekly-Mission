import './ModalList.css';

function ModalList({ list }) {
  return (
    <ul className="modalFolderList">
      {list.map(({ id, name, link }) => (
        <li key={id} className='modalFolder'>
          <span className='modalFolderName'>{name}</span>
          <span className='modalLinkCounts'>{`${link.count}개 링크`}</span>
        </li>
      ))}
    </ul>
  );
}

export default ModalList;
