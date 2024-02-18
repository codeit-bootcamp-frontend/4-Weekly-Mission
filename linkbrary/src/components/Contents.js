import "../styles/Contents.css";

import CardSection from "./CardSection";

function Contents({ items }) {
  return (
    <article>
      <div className="folders-gridBox">
        {items.map((item) => {
          return <CardSection item={item} key={item.id}></CardSection>;
        })}
      </div>
    </article>
  );
}

export default Contents;
