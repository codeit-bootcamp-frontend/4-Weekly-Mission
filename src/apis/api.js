export const getProfileData = async () => {
	const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1");

	if (!response.ok) {
		throw new Error("로그인이 실패했습니다.");
	}

	const data = await response.json();

	return data;
};

export const getFolderData = async () => {
	const response = await fetch(
		"https://bootcamp-api.codeit.kr/api/sample/folder"
	);

	if (!response.ok) {
		throw new Error("폴더 정보를 불러오는데 실패했습니다.");
	}

	const data = await response.json();

	return data;
};

export const getFolderList = async () => {
	const response = await fetch(
		"https://bootcamp-api.codeit.kr/api/users/1/folders"
	);

	if (!response.ok) {
		throw new Error("링크 정보를 불러오는데 실패했습니다.");
	}

	const data = await response.json();

	return data;
};

export const getLinkData = async (selectedFolderId) => {
	const query =
		selectedFolderId && selectedFolderId !== "ALL"
			? `?folderId=${selectedFolderId}`
			: ``;

	const response = await fetch(
		`https://bootcamp-api.codeit.kr/api/users/1/links${query}`
	);

	if (!response.ok) {
		throw new Error("링크 정보를 불러오는데 실패했습니다.");
	}

	const data = await response.json();

	return data;
};
