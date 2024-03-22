//server component: fetch data
import ModalList from '../modals/list/ModalList';

import Card from './Card';

interface LinksData {
  created_at: string;
  image_source: string | null;
  title: string | null;
  description: string | null;
  url: string | undefined;
  id: string;
}

const CardList = ({ links }: any) => {
  if (!links.length) {
    return (
      <div className='card-empty'>저장된 링크가 없습니다</div>
    )
  }

  return (
    <ul className="card-frame_ly">
      {links.map(({ created_at, image_source, title, description, url, id }: LinksData) => (
        <Card 
          key={id}
          imgSrc={image_source}
          title={title}
          description={description}
          createdAt={created_at}
          url={url}
        ><ModalList/></Card>
      ))}
    </ul>
  );
};

export default CardList;
