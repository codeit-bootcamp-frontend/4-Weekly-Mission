import "components/LinkCard.css";
import "components/LinkCardCollection.css";
import { useState, useEffect } from "react";
import { acceptDataFromApi } from "Api";

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

const FavorStar = function () {
	return <img className="favor-star" src="star.svg" alt="FavoriteButton" />;
};

const FolderCard = function ({ contents, favorite = false }) {
	const { id, created_at, description, imageSource, url, createdAt } = contents;
	const cardImage = { backgroundImage: `url(${imageSource})` };

	const timeConversion = new Date(created_at || createdAt); // sampleApi와 userApi의 양식이 달라 호환시키기 위함

	const passedTime = timePassedFromCreate(timeConversion);
	const editedTime = `${timeConversion.getFullYear()}. ${
		timeConversion.getMonth() + 1
	}. ${timeConversion.getDate()}`;

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
			{favorite && <FavorStar />}
			<section className="card-text">
				<p className="card-passed-time">{passedTime}</p>
				<p className="card-contents">{description}</p>
				<p className="card-edited-date">{editedTime}</p>
			</section>
		</a>
	);
};

const LinkCardCollection = function ({ items, favorite = false }) {
	return (
		<section className="folder-card-grid">
			{items.map((item) => (
				<FolderCard key={item.id} contents={item} favorite={favorite} />
			))}
		</section>
	);
};

export default LinkCardCollection;
