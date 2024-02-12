import './Section2.css';
import Card from './Card';
import CardSample from './CardSample';

function Section2({ cardData }) {
  const calculateTime = (el) => {
    const createdTime = new Date(el.createdAt);
    const currentTime = new Date();
    const timeMinus = Math.floor((currentTime - createdTime) / 1000 / 60);

    if (timeMinus < 2) return '1 minute ago';
    if (timeMinus <= 59) return `${timeMinus} minutes ago`;
    if (timeMinus <= 60 * 23) return `${Math.floor(timeMinus / 60)} hours ago`;
    if (timeMinus <= 60 * 24 * 30)
      return `${Math.floor(timeMinus / 24 / 60)} days ago`;
    if (timeMinus < 60 * 24 * 365)
      return `${Math.floor(timeMinus / 30 / 24 / 60)} months ago`;
    return `${Math.floor(timeMinus / 30 / 24 / 60 / 12)} years ago`;
  };

  return (
    <section className="section-wrapper">
      {cardData
        ? cardData.map((el) => (
            <a href={el.url} target="_blank" rel="noreferrer" key={el.id}>
              <div className="card-wrapper">
                <Card cardData={el} />
                <div className="card-textbox">
                  <p className="uploadtime-minute gap">{calculateTime(el)}</p>
                  <p className="text-content gap">{el.description}</p>
                  <p className="uploadtime-date">
                    {new Date(el.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </a>
          ))
        : Array.from({ length: 9 }, (_, i) => i).map((number) => (
            <div className="card-wrapper" key={number}>
              <CardSample number={number} />
              <div className="card-textbox">
                <p className="uploadtime-minute gap">10 minutes ago</p>
                <p className="text-content gap">
                  Lorem ipsum dolor sit amet consectetur. Metus amet habitant
                  nunc{' '}
                </p>
                <p className="uploadtime-date">2023.3.15</p>
              </div>
            </div>
          ))}
    </section>
  );
}

export default Section2;
