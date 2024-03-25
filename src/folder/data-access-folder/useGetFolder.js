"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetFolder = void 0;
const util_map_1 = require("folder/util-map");
const util_1 = require("sharing/util");
const util_2 = require("sharing/util");
const useGetFolder = () => {
    const getFolder = () => util_2.axiosInstance.get("sample/folder");
    const { loading, error, data } = (0, util_1.useAsync)(getFolder);
    const folderData = (0, util_map_1.mapFolderData)(data === null || data === void 0 ? void 0 : data.folder);
    return { loading, error, data: folderData };
};
exports.useGetFolder = useGetFolder;
