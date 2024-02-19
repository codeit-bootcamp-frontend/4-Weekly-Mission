import "../style/main.css";
import { useEffect, useState } from "react";
import ErrorImage from "../image/image1.png";
import Search from "./Search";

function Main({ page }) {
  const [links, setLinks] = useState([]);

  function time(date) {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
    if (minutes < 2) {
      return "1 minute ago";
    } else if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else if (hours < 2) {
      return "1 hour ago";
    } else if (hours < 24) {
      return `${hours} hours ago`;
    } else if (days < 2) {
      return "1 day ago";
    } else if (days < 30) {
      return `${days} days ago`;
    } else if (months < 2) {
      return "1 month ago";
    } else if (months < 12) {
      return `${months} months ago`;
    } else if (years < 2) {
      return "1 year ago";
    } else {
      return `${years} years ago`;
    }
  }

  useEffect(() => {
    async function getFolderData() {
      try {
        const response = await fetch(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        if (!response.ok) {
          throw new Error("error");
        }
        const answer = await response.json();
        // console.log("dd");
        // console.log(answer.folder.links);
        setLinks(answer.folder.links);
      } catch (err) {
        console.error(err);
      }
    }
    getFolderData();
  }, []);

  console.log(links);

  if (page == "shared") {
    return (
      <div className="main">
        <Search />
        <div class="cardList">
          {links &&
            links.map((card) => (
              <a href={card.url} className="card" key={card.id}>
                <div>
                  <img
                    className="CardImg"
                    src={card.imageSource || ErrorImage}
                    alt={card.title}
                  />
                </div>
                <div className="CardInfo">
                  <p className="time">{time(card.createdAt)}</p>
                  <p className="title">{card.title}</p>
                  {/* <p className="date">{card.description}</p> */}
                </div>
              </a>
            ))}
        </div>
      </div>
    );
  }
}

export default Main;
