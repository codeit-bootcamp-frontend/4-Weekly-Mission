"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetFolders = void 0;
const util_1 = require("sharing/util");
const util_2 = require("sharing/util");
const useGetFolders = () => {
    var _a;
    const getFolders = () => util_1.axiosInstance.get("users/1/folders");
    const { loading, error, data } = (0, util_2.useAsync)(getFolders);
    const folders = (_a = data === null || data === void 0 ? void 0 : data.data) !== null && _a !== void 0 ? _a : [];
    const sortedFolders = folders.sort((a, b) => a.id - b.id);
    return { loading, error, data: sortedFolders };
};
exports.useGetFolders = useGetFolders;
