import "components/ShareFolderProfile.css";
import { acceptDataFromApi } from "Api";
import { useState, useEffect } from "react";

const ShareFolderProfile = function () {
	const [folderName, setFolderName] = useState("빈 폴더");
	const [folderImg, setFolderImg] = useState("favicon.png");
	const [folderAccountName, setFolderAccountName] = useState("USER_NAME");

	const FOLDER = "sample/folder";
	const USER = "sample/user";
	const loadFolderAccountName = async (parameter) => {
		const { name, profileImageSource } = await acceptDataFromApi(parameter);
		if (!name || !profileImageSource) return;

		setFolderAccountName(name);
		setFolderImg(profileImageSource);
	};

	const loadFolderProfileData = async (parameter) => {
		const receivedData = await acceptDataFromApi(parameter);
		if (!receivedData) return;

		setFolderName(receivedData.folder.name);
	};

	useEffect(() => {
		loadFolderAccountName(USER);
		loadFolderProfileData(FOLDER);
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
