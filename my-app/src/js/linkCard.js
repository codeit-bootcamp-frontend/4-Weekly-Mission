import sharedImg from "./sharedMock";
import "../css/shared/linkCard.css";

function LinkCard(){
  return(
    <section className="card">
      <img src={sharedImg.one} alt="콘텐츠 이미지"/>
      <figure className="card-text">
        <p className="time-ago">10 minutes ago</p>
        <p className="card-description">Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat.</p>
        <p className="upload-date">2023. 3. 15</p>
      </figure>
    </section>
  );
}

export default LinkCard;