import noImage from "../../assets/img/png/no-image.png";
import { formatDateRelative, formatDate } from "../util/formatDate";

function LinkContainer({ link, onHover, onMouseOut, hoverdId }) {
  return (
    <a
      className="link-grid-element"
      target="_blank"
      rel="noopener noreferrer"
      onMouseOver={onHover}
      onMouseOut={onMouseOut}
      href={link.url}
    >
      <div className="link-image-container">
        <img
          className={`link-image-sizing ${
            link.id === hoverdId ? "link-size-up" : ""
          }`}
          src={link.imageSource || noImage}
          alt={link.imageSource || "no-Image"}
        />
      </div>

      <div className="link-grid-div">
        <div>{formatDateRelative(link.createdAt)}</div>
        <div>{link.title}</div>
        <div>{formatDate(link.createdAt)}</div>
      </div>
    </a>
  );
}

export default LinkContainer;
