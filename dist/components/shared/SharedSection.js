import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { getFolderInfo } from "../../api/api";
import smileIcon from "../../assets/icons/icon_smile.png";
import styled from "styled-components";
const SharedSection = () => {
    const [folderName, setFolderName] = useState([]);
    const [owner, setOwner] = useState([]);
    const { profileImageSource, name } = owner;
    async function handleLoad() {
        const folderInfo = await getFolderInfo();
        const { name, owner } = folderInfo.folder;
        setFolderName(name);
        setOwner(owner);
    }
    useEffect(() => {
        handleLoad();
    }, []);
    return (_jsxs("section", { className: "codeit-mark-section", children: [_jsx(OwnerProfile, { src: profileImageSource || smileIcon, alt: "smile icon" }), _jsx("span", { children: name }), _jsx("div", { id: "favorites", children: _jsx("h1", { children: folderName }) })] }));
};
const OwnerProfile = styled.img `
  display: flex;
  justify-content: center;
  width: 60px;
  height: 60px;
  align-items: center;
  border-radius: 47px;
  margin-bottom: 12px;
`;
export default SharedSection;
