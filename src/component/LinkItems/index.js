import LinkItem from "./LinkItem";
import "./LinkItems.css";
import { LinkImageLoading, LinkLoading, LoadingAnimation } from "./style";

const LinkItems = ({ links = [], isLoading }) => {
  return (
    <div className="LinkItems">
      {isLoading ? (
        <LoadingAnimation>
          <div className="LinkItem">
            <LinkImageLoading />
            <LinkLoading />
            <LinkLoading />
          </div>
        </LoadingAnimation>
      ) : (
        links.map((link) => <LinkItem key={link.id} link={link} />)
      )}
      {isLoading || links.length !== 0 || <div>저장된 링크가 없습니다.</div>}
    </div>
  );
};

export default LinkItems;
