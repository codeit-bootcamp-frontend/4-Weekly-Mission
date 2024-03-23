import defaultImage from "../../../images/card-default.png";
import { calculateTimePassed } from "../../../utils/calculateTimePassed";
import starButtonImg from "../../../images/starButton.svg";
import { LinkImage, StarButton } from "../style";
import "../LinkItems.css";
import { useState } from "react";
import Kebab from "../Kebab";

interface Link {
	url: string;
	title: string;
	description: string;
	createdAt: number;
	created_at: number;
	imageSource: string;
	image_source: string;
}

interface Props {
	folders: any;
	link: Link;
}

const LinkItem = ({ folders, link }: Props) => {
	const [kebabOpen, setKebabOpen] = useState(false);

	const CREATED_AT = new Date(link.createdAt || link.created_at);
	const YEAR = CREATED_AT.getFullYear();
	const MONTH = CREATED_AT.getMonth() + 1;
	const DATE = CREATED_AT.getDate();
	const CREATED_DATE = `${YEAR}. ${MONTH}. ${DATE}`;

	const handleClick = (e: MouseEvent) => {
		e.preventDefault();
		setKebabOpen(!kebabOpen);
	};

	return (
		<a className="LinkItem" href={link.url} target="_blank" rel="noreferrer">
			<LinkImage
				data-image={link.imageSource || link.image_source || defaultImage}
			>
				<StarButton src={starButtonImg} />
			</LinkImage>
			<div className="createdAt">
				{calculateTimePassed(CREATED_AT)}
				<Kebab
					folders={folders}
					onClick={handleClick}
					kebabOpen={kebabOpen}
					url={link.url}
				/>
			</div>
			<p className="description">{link.description}</p>
			<p className="createdDate">{CREATED_DATE}</p>
		</a>
	);
};

export default LinkItem;
