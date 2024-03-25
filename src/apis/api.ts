// getProfileData
export type ProfileDatum = {
	auth_id: string;
	created_at: string;
	email: string;
	id: number;
	image_source: string;
	name: string;
};

export type Profile = {
	data: ProfileDatum[];
};

// getFolderData
export type SharedFolderLink = {
	createdAt: string;
	description: string;
	id: number;
	imageSource: string;
	title: string;
	url: string;
};

type Owner = {
	id: number;
	name: string;
	profileImageSource: string;
};

export type SharedFolder = {
	folder: {
		count: number;
		id: number;
		links: SharedFolderLink[];
		name: string;
		owner: Owner;
	};
};

// getSavedFolderList
export type FolderListDatum = {
	created_at: string;
	favorite: boolean;
	id: number | "ALL";
	link: {
		count: number;
	};
	name: string;
	user_id: number;
};

export type FolderList = {
	data: FolderListDatum[];
};

// getLinkData
export type LinkDatum = {
	created_at: string;
	description: string;
	folder_id: number;
	id: number;
	image_source: string;
	title: string;
	updated_at: string;
	url: string;
};

export type LinkData = {
	data: LinkDatum[];
};

export const getProfileData = async (): Promise<Profile> => {
	const response = await fetch("https://bootcamp-api.codeit.kr/api/users/1");

	if (!response.ok) {
		throw new Error("로그인이 실패했습니다.");
	}

	const data = await response.json();

	return data;
};

export const getSharedFolder = async (): Promise<SharedFolder> => {
	const response = await fetch(
		"https://bootcamp-api.codeit.kr/api/sample/folder"
	);

	if (!response.ok) {
		throw new Error("폴더 정보를 불러오는데 실패했습니다.");
	}

	const data = await response.json();

	return data;
};

export const getSavedFolderList = async (): Promise<FolderList> => {
	const response = await fetch(
		"https://bootcamp-api.codeit.kr/api/users/1/folders"
	);

	if (!response.ok) {
		throw new Error("링크 정보를 불러오는데 실패했습니다.");
	}

	const data = await response.json();

	return data;
};

export const getLinkData = async (
	selectedFolderId: number | "ALL"
): Promise<LinkData> => {
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
