import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { getAllLinkData } from "../api/api";
import HeaderElement from "../components/common/HeaderElement";
import FooterElement from "../components/common/FooterElement";
import GlobalStyle from "../components/common/GlobalStyle";
import FolderInput from "../components/Folder/FolderInput";
import FolderList from "../components/common/FolderList";
import Input from "../components/common/Input";
import Menus from "../components/Folder/Menus";
import FolderTitle from "../components/Folder/FolderTitle";
import { SharedModal } from "../components/common/modals/SharedModal";
import { EditNameModal } from "../components/common/modals/EditNameModal";
import { DeleteModal } from "../components/common/modals/DeleteModal";
import { AddFolderModal } from "../components/common/modals/AddFolderModal";
import { COLORS } from "../constants/colors";
const Folder = () => {
    const [titleName, setTitleName] = useState("전체");
    const [listId, setListId] = useState("");
    const [data, setData] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(null);
    const [searchInputValue, setSearchInputValue] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllLinkData(listId);
                const result = await response.data;
                setData(result);
            }
            catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [listId]);
    const onSearchEnterClickHandle = () => {
        findCardsByKeyword(searchInputValue);
    };
    const addLinkDivRef = useRef(null);
    const footerDivRef = useRef(null);
    const [isAddLinkVisible, setIsAddLinkVisible] = useState(false);
    const onIntersectionHandle = async (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsAddLinkVisible(true);
            }
            else {
                setIsAddLinkVisible(false);
            }
        });
    };
    useEffect(() => {
        if (addLinkDivRef.current) {
            const observer1 = new IntersectionObserver(onIntersectionHandle, {
                threshold: 0.1,
            });
            if (addLinkDivRef.current) {
                observer1.observe(addLinkDivRef.current);
            }
            const observer2 = new IntersectionObserver(onIntersectionHandle, {
                threshold: 0.1,
            });
            if (footerDivRef.current) {
                observer2.observe(footerDivRef.current);
            }
            return () => {
                observer1.disconnect();
                observer2.disconnect();
            };
        }
    }, []);
    const findCardsByKeyword = (keyword) => {
        const results = [];
        if (data) {
            data.forEach((card) => {
                const cardInfo = card.title + card.description + card.url;
                if (cardInfo && cardInfo.includes(keyword)) {
                    results.push(card);
                }
                else {
                    console.log("없음");
                }
            });
        }
        setData(results);
    };
    return (_jsxs(Container, { children: [_jsx(SharedModal, { "$isModalVisible": isModalVisible, setIsModalVisible: setIsModalVisible }), _jsx(EditNameModal, { "$isModalVisible": isModalVisible, setIsModalVisible: setIsModalVisible }), _jsx(DeleteModal, { "$isModalVisible": isModalVisible, setIsModalVisible: setIsModalVisible }), _jsx(AddFolderModal, { "$isModalVisible": isModalVisible, setIsModalVisible: setIsModalVisible }), _jsx(GlobalStyle, {}), _jsx(HeaderElement, { "$positionval": "static" }), _jsx(FolderInput, { setIsVisible: setIsModalVisible, "$isAddLinkVisible": isAddLinkVisible, ref: addLinkDivRef }), _jsx(Input, { inputValue: searchInputValue, setInputValue: setSearchInputValue, onEnterButtonHandle: onSearchEnterClickHandle }), _jsx(Menus, { changeTitle: setTitleName, changeID: setListId, setIsVisible: setIsModalVisible }), _jsx(FolderTitle, { titleName: titleName, setIsModal: setIsModalVisible }), data[0] ? (_jsx(FolderList, { items: data, "$isModalVisible": isModalVisible, setIsModalVisible: setIsModalVisible })) : (_jsx(NoLinkMsg, { children: "\uC800\uC7A5\uB41C \uB9C1\uD06C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." })), _jsx(AddFolderBtn, { "$isAddLinkVisible": isAddLinkVisible, children: "\uD3F4\uB354 \uCD94\uAC00 +" }), _jsx("div", { ref: footerDivRef, children: _jsx(FooterElement, {}) })] }));
};
const Container = styled.div `
  margin: 0px;
`;
const NoLinkMsg = styled.p `
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  margin-top: 40px;
`;
const AddFolderBtn = styled.button `
  border: none;
  border-radius: 20px;
  border: 1px solid ${COLORS.White};
  background: ${COLORS.Primary};
  position: sticky;
  left: 50%;
  transform: translateX(-50%);
  bottom: ${({ $isAddLinkVisible }) => ($isAddLinkVisible ? "50px" : "150px")};
  padding: 8px 24px;
  display: none;

  color: ${COLORS.Grey_200};
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;

  @media (max-width: 375px) {
    display: block;
  }
`;
export default Folder;
