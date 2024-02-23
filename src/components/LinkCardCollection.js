import "components/LinkCard.css";
import "components/LinkCardCollection.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const timePassedFromCreate = (time) => {
	let currentTime = new Date().getTime();
	if (!time) {
		throw new Error("시간 정보를 제대로 불러오지 못했습니다.");
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

const FolderCard = function ({ contents, favorite, kebab }) {
	const {
		id,
		created_at,
		createdAt,
		description,
		imageSource,
		image_source,
		url,
	} = contents;
	const [kebabMenuPop, setKebabMenuPop] = useState(false);

	const cardImage = { backgroundImage: `url(${imageSource || image_source})` };
	const timeConversion = new Date(created_at || createdAt); // sampleApi와 userApi의 양식이 달라 호환시키기 위함
	const passedTime = timePassedFromCreate(timeConversion);
	const editedTime = `${timeConversion.getFullYear()}. ${
		timeConversion.getMonth() + 1
	}. ${timeConversion.getDate()}`;

	const handleKebabBtn = () => {
		setKebabMenuPop(!kebabMenuPop);
	};

	return (
		<button type="button" className="card-box" key={id}>
			<Link to={url} target="_blank">
				{imageSource || image_source ? (
					<div style={cardImage} />
				) : (
					<NoCardImg />
				)}

				<section className="card-text">
					<p className="card-passed-time">{passedTime}</p>
					<p className="card-contents">{description}</p>
					<p className="card-edited-date">{editedTime}</p>
				</section>
			</Link>
			{kebab && (
				<button type="button" onClick={handleKebabBtn} className="kebab">
					<img src="kebab.svg" alt="kebabButton" />
				</button>
			)}
			{favorite && (
				<button type="button" className="favor-star">
					<img src="star.svg" alt="FavoriteButton" />
				</button>
				// {kebabPop && }
			)}
		</button>
	);
};

const LinkCardCollection = function ({
	items,
	favorite = false,
	kebab = false,
}) {
	return (
		<section className="folder-card-grid">
			{items.map((item) => (
				<FolderCard
					key={item.id}
					contents={item}
					favorite={favorite}
					kebab={kebab}
				/>
			))}
		</section>
	);
};

export default LinkCardCollection;
