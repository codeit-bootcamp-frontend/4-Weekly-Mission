import "components/LinkCard.css";
import "components/LinkCardCollection.css";
import { useState, useEffect } from "react";
import { acceptDataFromApi } from "Api";

const timePassedFromCreate = (time) => {
	let currentTime = new Date().getTime();
	if (!time) {
		throw new Error("UnknownTime");
	}

	const createdTime = new Date(time).getTime();
	const timeDiffMin = Math.floor((currentTime - createdTime) / 1000 / 60); // 분단위
	if (timeDiffMin < 2) return "1 minute ago";
	if (timeDiffMin < 60) return `${timeDiffMin} minutes ago`;

	const timeDiffHr = Math.floor(timeDiffMin / 60); // 시
	if (timeDiffHr === 1) return "1 hour ago";
	if (timeDiffHr < 24) return `${timeDiffHr} hours ago`;

	const timeDiffDay = Math.floor(timeDiffHr / 24); // 일
	if (timeDiffDay === 1) return "1 day ago";
	if (timeDiffDay < 31) return `${timeDiffDay} days ago`;
	if (timeDiffDay === 31) return "1 month ago";

	const timeDiffMonth = Math.floor(timeDiffDay / 30); // 월
	if (timeDiffMonth < 12) return `${timeDiffMonth} months ago`;

	const timeDiffYr = Math.floor(timeDiffMonth / 12);
	if (timeDiffYr === 1) return `1 year ago`;
	return `${timeDiffYr} years ago`;
};

const NoCardImg = () => {
	return <div className="no-card-img"></div>;
};

const FolderCard = function ({ contents }) {
	const { id, createdAt, description, imageSource, url } = contents;
	const cardImage = { backgroundImage: `url(${imageSource})` };

	const passedTime = timePassedFromCreate(createdAt);

	return (
		<a
			href={url}
			target="_blank"
			rel="noreferrer"
			className="card-box"
			key={id}
		>
			{imageSource && <div style={cardImage} />}
			{!imageSource && <NoCardImg />}
			<section className="card-text">
				<p className="card-passed-time">{passedTime}</p>
				<p className="card-contents">{description}</p>
				<p className="card-edited-date">{createdAt}</p>
			</section>
		</a>
	);
};

const LinkCardCollection = function () {
	const [items, setItems] = useState([]);

	const handleLoad = async () => {
		const {
			folder: { links },
		} = await acceptDataFromApi("sample/folder");
		setItems(links);
	};

	useEffect(() => {
		handleLoad();
	}, []);

	return (
		<section className="folder-card-grid">
			{items.map((item) => (
				<FolderCard key={item.id} contents={item} />
			))}
		</section>
	);
};

export default LinkCardCollection;
