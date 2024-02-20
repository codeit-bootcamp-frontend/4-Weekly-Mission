import "components/ShareFolderProfile.css";
import { acceptDataFromApi } from "Api";
import { useState, useEffect } from "react";

const ShareFolderProfile = function () {
	const [folderName, setFolderName] = useState("빈 폴더");
	const [folderImg, setFolderImg] = useState("favicon.png");
	const [folderAccountName, setFolderAccountName] = useState("USER_NAME");

	const FOLDER = "sample/folder";
	const USER = "sample/user";
	const loadFolderAccountName = async (requestQuery) => {
		const { name, profileImageSource } = await acceptDataFromApi(requestQuery);
		if (!name || !profileImageSource) return;

		setFolderAccountName(name);
		setFolderImg(profileImageSource);
	};

	const loadFolderProfileData = async (requestQuery) => {
		const {
			folder: { name },
		} = await acceptDataFromApi(requestQuery);
		if (!name) return;

		setFolderName(name);
	};

	useEffect(() => {
		loadFolderAccountName(USER);
		loadFolderProfileData(FOLDER);
		console.log(folderName);
	}, [folderName, folderImg, folderAccountName]);

	return (
		<section className="folder-page-profile">
			<img src={folderImg} alt="testingAccount" />
			<p className="user-name">{`${folderAccountName}`}</p>
			<p className="folder-name">{`${folderName}`}</p>
		</section>
	);
};

export default ShareFolderProfile;
