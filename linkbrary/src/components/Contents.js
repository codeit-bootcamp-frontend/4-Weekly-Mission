import "../styles/Contents.css";

import CardSection from "./CardSection";

function Contents({ items, isShowModal }) {
  return (
    <section className="section-area">
      <ul className="card-list">
        {items.map((item) => (
          <li key={item.id} className="card-item">
            <CardSection
              item={item}
              key={item.id}
              isShowModal={isShowModal}
            ></CardSection>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contents;
