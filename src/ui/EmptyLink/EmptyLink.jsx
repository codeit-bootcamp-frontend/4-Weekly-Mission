import { EMPTY_MESSAGE } from "ui/CardListEmpty/constant";
import "./EmptyLink.css";

export function EmptyLink() {
  return (
    <div className="empty-link">
      <p className="isEmpty">{EMPTY_MESSAGE}</p>
    </div>
  );
}
