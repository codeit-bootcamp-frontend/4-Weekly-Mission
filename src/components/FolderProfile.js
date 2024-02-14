import "components/FolderProfile.css";
import { acceptDataFromApi } from "Api";
import { useState, useEffect } from "react";

const FolderProFile = function () {
	const [folderName, setFolderName] = useState("빈 폴더");
	const [folderImg, setFolderImg] = useState("favicon.png");
	const [folderAccountName, setFolderAccountName] = useState("USER_NAME");

	const folder = "folder";
	const user = "user";
	const loadFolderAccountName = async (parameter) => {
		const receivedData = await acceptDataFromApi(parameter);
		if (!receivedData) return;

		setFolderAccountName(receivedData.name);
		setFolderImg(receivedData.profileImageSource);
	};

	const loadFolderProfileData = async (parameter) => {
		const receivedData = await acceptDataFromApi(parameter);
		if (!receivedData) return;

		setFolderName(receivedData.folder.name);
	};

	useEffect(() => {
		loadFolderAccountName(user);
		loadFolderProfileData(folder);
	}, [folderName, folderImg, folderAccountName]);

	return (
		<section className="folderPageProfile">
			<img src={folderImg} alt="testingAccount" />
			<p className="userName">{`${folderAccountName}`}</p>
			<p className="folderName">{`${folderName}`}</p>
		</section>
	);
};

export default FolderProFile;
