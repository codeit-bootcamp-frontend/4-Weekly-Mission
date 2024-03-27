import { jsx as _jsx } from "react/jsx-runtime";
import FolderItem from "./FolderItem";
function FolderList({ items, $isModalVisible, setIsModalVisible }) {
    return (_jsx("article", { children: _jsx("div", { className: "folders-gridBox", children: items.map((item) => {
                return (_jsx(FolderItem, { item: item, "$isModalVisible": $isModalVisible, setIsModalVisible: setIsModalVisible }, item.id));
            }) }) }));
}
export default FolderList;
