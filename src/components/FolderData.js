import "components/FolderCard.css";
import "components/FolderData.css";
import FolderSearchBar from "./FolderSearchBar";
import { useState, useEffect } from "react";
import { acceptDataFromApi } from "Api";

const timePassedFromCreate = (time) => {
	let currentTime = new Date().getTime();
	if (!time) return "UnknownTime";

	const createdTime = new Date(time).getTime();
	const timeDiffMin = Math.floor((currentTime - createdTime) / 1000 / 60); // 분단위
	if (timeDiffMin < 2) return "1 minute ago";
	if (timeDiffMin < 60) return `${timeDiffMin} minutes ago`;

	const timeDiffHr = Math.floor(timeDiffMin / 60); // 시
	if (timeDiffHr === 1) return "1 hour ago";
	if (timeDiffHr < 24) return `${timeDiffHr} hours ago`;

	const timeDiffDay = Math.floor(timeDiffHr / 24); // 일
	if (timeDiffDay === 1) return "1 day ago";
	if (timeDiffDay < 31) return `${timeDiffDay} days ago}`;
	if (timeDiffDay === 31) return "1 month ago";

	const timeDiffMonth = Math.floor(timeDiffDay / 30); // 월
	if (timeDiffMonth < 12) return `${timeDiffMonth} months ago`;

	const timeDiffYr = Math.floor(timeDiffMonth / 12);
	if (timeDiffYr === 1) return `1 year ago`;
	return `${timeDiffYr} years ago`;
};

const NoCardImg = () => {
	return <div className="noCardImg"></div>;
};

const FolderCard = function ({ contents }) {
	const { id, createdAt, description, imageSource } = contents;
	const cardImage = { backgroundImage: `url(${imageSource})` };

	const passedTime = timePassedFromCreate(createdAt);

	return (
		<section className="cardBox" key={id}>
			{imageSource && <div style={cardImage} />}
			{!imageSource && <NoCardImg />}
			<section className="cardText">
				<p className="cardEditedTime">{passedTime}</p>
				<p className="cardContents">{description}</p>
				<p className="cardEditedDate">{createdAt}</p>
			</section>
		</section>
	);
};

const FolderData = function (folderData) {
	const [items, setItems] = useState([]);

	const handleLoad = async () => {
		const {
			folder: { links },
		} = await acceptDataFromApi("folder");
		setItems(links);
	};

	useEffect(() => {
		handleLoad();
	}, []);

	return (
		<main>
			<FolderSearchBar />
			<section className="folderCardGrid">
				{items.map((item) => (
					<FolderCard key={item.id} contents={item} />
				))}
			</section>
		</main>
	);
};

export default FolderData;
