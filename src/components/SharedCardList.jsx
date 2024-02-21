import Card from "./Card";

const SharedCardList = ({ sharedFolder }) => {
  return (
    <ul className='card-frame_ly'> 
      {sharedFolder.links.map(({ createdAt, imageSource, title, description, url, id }) => (
        <Card key={id} 
          imgSrc={imageSource}
          title={title}
          description={description}
          createdAt={createdAt}
          url={url}
        />
      ))}
    </ul>
  )
}

export default SharedCardList;