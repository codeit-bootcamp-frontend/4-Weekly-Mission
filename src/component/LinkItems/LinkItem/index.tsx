import defaultImage from "../../../images/card-default.png";
import { calculateTimePassed } from "../../../utils/calculateTimePassed";
import starButtonImg from "../../../images/starButton.svg";
import { LinkImage, StarButton } from "../style";
import "../LinkItems.css";
import { useRef, useState } from "react";
import Kebab from "../Kebab";
import { SharedFolderLink, LinkDatum } from "../../../apis/api";

// (alias) type FolderDataLink = {
//   id: number;
//   title: string;
//   url: string;
//   description: string;
//   createdAt: string;
//   imageSource: string;
// }

// (alias) type LinkDatum = {
//   id: number;
//   title: string;
//   url: string;
//   description: string;
//   created_at: string;
//   folder_id: number;
//   image_source: string;
//   updated_at: string;
// }

interface Props {
	folders: any;
	link: LinkDatum | SharedFolderLink;
}

const LinkItem = ({ folders, link }: Props) => {
	const [kebabOpen, setKebabOpen] = useState(false);

	const CREATED_AT = useRef<Date>();
	if ("createdAt" in link) CREATED_AT.current = new Date(link.createdAt);
	if ("created_at" in link) CREATED_AT.current = new Date(link.created_at);
	const YEAR = CREATED_AT.current?.getFullYear();
	const MONTH = CREATED_AT.current?.getMonth();
	const DATE = CREATED_AT.current?.getDate();
	const CREATED_DATE = `${YEAR}. ${MONTH ? MONTH + 1 : MONTH}. ${DATE}`;

	const handleClick = (e: MouseEvent) => {
		e.preventDefault();
		setKebabOpen(!kebabOpen);
	};

	return (
		<a className="LinkItem" href={link.url} target="_blank" rel="noreferrer">
			<LinkImage
				data-image={
					"imageSource" in link
						? link.imageSource
						: link.image_source || defaultImage
				}
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
