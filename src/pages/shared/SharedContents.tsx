import "./SharedContents.css";
import { dateChange, timeChange } from "../../dateFunction";
import { UserLinks } from "../../types/type";

function SharedContents({ contents }: any) {
  return (
    <article>
      <ul className="contentsBox">
        {contents?.map(
          ({
            id,
            title,
            imageSource,
            createdAt,
            url,
            description,
          }: UserLinks) => {
            return (
              <li key={id}>
                <a href={url} target="_blank" rel="noreferrer">
                  <div className="imgBox">
                    <img
                      className="contentsImg"
                      src={
                        imageSource
                          ? imageSource
                          : `${process.env.PUBLIC_URL}/images/noImage.jpg`
                      }
                      alt={title}
                    />
                    <button type="button">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/star.svg`}
                        alt="즐겨찾기 추가"
                      />
                    </button>
                  </div>
                  <div className="textBox">
                    <button type="button">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/kebab.png`}
                        alt="더보기"
                      />
                    </button>
                    <span>{timeChange(createdAt)}</span>
                    <p className="description">{description}</p>
                    <p className="date">{dateChange(createdAt)}</p>
                  </div>
                </a>
              </li>
            );
          }
        )}
      </ul>
    </article>
  );
}

export default SharedContents;
