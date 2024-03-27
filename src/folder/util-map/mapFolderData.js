"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapFolderData = void 0;
const util_map_1 = require("link/util-map");
const mapFolderData = (folder) => {
    var _a;
    if (!folder)
        return [];
    const { name, owner, links } = folder;
    return {
        profileImage: owner === null || owner === void 0 ? void 0 : owner.profileImageSource,
        ownerName: owner === null || owner === void 0 ? void 0 : owner.name,
        folderName: name,
        links: (_a = links === null || links === void 0 ? void 0 : links.map(util_map_1.mapLinksData)) !== null && _a !== void 0 ? _a : [],
    };
};
exports.mapFolderData = mapFolderData;
