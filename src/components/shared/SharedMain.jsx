import "./SharedMain.css";
import { useState } from "react";
import LinkContainer from "./LinkContainer";

function SharedMain({ ownerProfile }) {
  const { links, name, owner } = ownerProfile;
  const [mouseHoverkey, setMouseHoverKey] = useState(null);

  const handleComponentHover = (id) => {
    setMouseHoverKey(id);
  };
  const handleComponentMouseOut = () => {
    setMouseHoverKey(null);
  };

  return (
    <main>
      <section className="column-center-gap-30 shared-section-first-container">
        <div className="image-container">
          <img
            className="image-sizing"
            src={owner.profileImageSource}
            alt="ownerImage"
          />
          <span>{owner.name}</span>
        </div>
        <span className="owner-name-font">{name}</span>
      </section>
      <section className="column-center-gap-40 shared-section-second-container">
        <input className="shared-input" placeholder="링크를 검색해 보세요" />
        <div className="link-grid">
          {links.map((link) => {
            return (
              <LinkContainer
                link={link}
                key={link.id}
                hoverdId={mouseHoverkey}
                onHover={() => handleComponentHover(link.id)}
                onMouseOut={() => handleComponentMouseOut()}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default SharedMain;
