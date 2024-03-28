"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersLink = exports.getUsersFolder = exports.getFolderUser = exports.getFolder = exports.getSharedUser = void 0;
const BASE_URL = "https://bootcamp-api.codeit.kr/api";
function getSharedUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}/sample/user`);
        const body = yield response.json();
        return body;
    });
}
exports.getSharedUser = getSharedUser;
function getFolder() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}/sample/folder`);
        const body = yield response.json();
        return body;
    });
}
exports.getFolder = getFolder;
function getFolderUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}/users/1`);
        const body = yield response.json();
        return body;
    });
}
exports.getFolderUser = getFolderUser;
function getUsersFolder() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}/users/1/folders`);
        const body = yield response.json();
        return body;
    });
}
exports.getUsersFolder = getUsersFolder;
function getUsersLink(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}/users/1/links${id}`);
        const body = yield response.json();
        return body;
    });
}
exports.getUsersLink = getUsersLink;
