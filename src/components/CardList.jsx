import Card from "./Card";

const CardList = ({ links, folderName, folderList }) => {
  if (!links.length) {
    return (
      <div className='card-empty'>저장된 링크가 없습니다</div>
    )
  }

  return (
    <ul className='card-frame_ly'> 
      {links.map(({ created_at, image_source, title, description, url, id }) => (
        <Card key={id} 
          imgSrc={image_source}
          title={title}
          description={description}
          createdAt={created_at}
          url={url}
          folderName={folderName}
          folderList={folderList}
        />
      ))}
    </ul>
  )
}

export default CardList;