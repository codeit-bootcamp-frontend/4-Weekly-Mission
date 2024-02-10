import "components/FolderCard.css";

const FolderCard = function () {
	return (
		<section className="cardBox">
			<div className="noCardImg"></div>
			<section className="cardText">
				<p className="cardEditedTime">10 minutes ago</p>
				<p className="cardContents">
					Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
					consequ atas dfsadfasdfasdfa sdfasdfasdfasdfsdfsa
					dfadfd....asdfasdfsdafsdafs dfsdafasdfasdfs dafdsfsdfasfsfs afasdfs
				</p>
				<p className="cardEditedDate">2023. 3. 15</p>
			</section>
		</section>
	);
};

export default FolderCard;
