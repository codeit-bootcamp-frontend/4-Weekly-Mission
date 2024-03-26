import cardlistStyles from './Cardlist.module.css';
import { Card } from '../card/Card';

export function Cardlist({ links }) {
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
}
