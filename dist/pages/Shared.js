import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { getFolderInfo } from "../api/api";
import HeaderElement from "../components/common/HeaderElement";
import FooterElement from "../components/common/FooterElement";
import SharedSection from "../components/shared/SharedSection";
import Input from "../components/common/Input";
import FolderList from "../components/common/FolderList";
import { DeleteModal } from "../components/common/modals/DeleteModal";
import { AddFolderModal } from "../components/common/modals/AddFolderModal";
import { useGetPromise } from "../hooks/uesGetPromise";
import "../styles/shared.css";
function Shared() {
    const foldersData = useGetPromise(getFolderInfo);
    const folders = foldersData?.folder?.links || [];
    const [searchInputValue, setSearchInputValue] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(null);
    return (_jsxs(_Fragment, { children: [_jsx(DeleteModal, { "$isModalVisible": isModalVisible, setIsModalVisible: setIsModalVisible }), _jsx(AddFolderModal, { "$isModalVisible": isModalVisible, setIsModalVisible: setIsModalVisible }), _jsx(HeaderElement, { "$positionval": "" }), _jsx(SharedSection, {}), _jsx(Input, { inputValue: searchInputValue, setInputValue: setSearchInputValue, onEnterButtonHandle: () => { } }), _jsx(FolderList, { items: folders, "$isModalVisible": isModalVisible, setIsModalVisible: setIsModalVisible }), _jsx(FooterElement, {})] }));
}
export default Shared;
