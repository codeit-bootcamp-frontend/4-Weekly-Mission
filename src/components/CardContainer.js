import InputBar from './InputBar';
import CardList from './CardList';
import './CardContainer.css';

const CardContainer = ({ links }) => {
  return (
    <div className="CardContainer">
      <InputBar />
      <CardList links={links} />
    </div>
  );
};

export default CardContainer;
