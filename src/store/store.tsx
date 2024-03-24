import { atom, selector } from "recoil";
import { fetchUserData, getUser } from "../apis/apiShared";
import { folderContentsData, folderUserData } from "../apis/apiFolder";

export const profileData = selector({
  key: "profile",
  get: getUser,
});

export const userData = selector({
  key: "user",
  get: fetchUserData,
});

export const folderUser = selector({
  key: "folderUser",
  get: folderUserData,
});

export const folderContents = selector({
  key: "folderContents",
  get: folderContentsData,
});

export const clickFolder = atom({
  key: "clickFolder",
  default: "전체",
});
export const clickFolderId = atom({
  key: "clickFolderId",
  default: "all",
});
export const folderLinkContents = atom({
  key: "folderLinkContents",
  default: { data: [] },
});
export const contentsLink = atom({
  key: "contentsLink",
  default: null,
});
