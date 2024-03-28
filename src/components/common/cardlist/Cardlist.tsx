import cardlistStyles from './Cardlist.module.css';
import { Card } from '../card/Card';

interface NewLink {
  created_at: string;
  description: string;
  id: number;
  image_source: string;
  title: string;
  url: string;
}
interface Props {
  links: NewLink[];
}
const Cardlist: React.FC<Props> = ({ links }) => {
  if (!links || links.length === 0) {
    return (
      <div className={cardlistStyles.nothing}>저장된 카드가 없습니다.</div>
    );
  }
  return (
    <div className={cardlistStyles.background}>
      {links.map((link) => {
        return <Card key={link.id} card={link} />;
      })}
    </div>
  );
};

export { Cardlist };
