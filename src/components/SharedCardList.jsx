import Card from "./Card";

const SharedCardList = ({folders}) => {
  return (
    <ul className='card-frame_ly'> 
      {folders.links.map(({ createdAt, imageSource, title, description, url, id }) => (
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