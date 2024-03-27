import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { styled } from "styled-components";
import { COLORS } from "../../../constants/colors";
import { DeleteModal } from "../../../components/common/modals/DeleteModal";
import { AddToFolder } from "../../../components/common/modals/AddToFolder";
export const PopOver = ({ $isPopOverVisible, setIsPopOverVisible, $options, $modalType, $top, $right, $isModalVisible, setIsModalVisible, }) => {
    return (_jsxs(_Fragment, { children: [_jsx(DeleteModal, { "$isModalVisible": $isModalVisible, setIsModalVisible: setIsModalVisible }), _jsx(AddToFolder, { "$isModalVisible": $isModalVisible, setIsModalVisible: setIsModalVisible }), _jsx(MenuOptions, { "$isVisible": $isPopOverVisible, "$top": $top, "$right": $right, children: $options.map((option, index) => (_jsx(Option, { onClick: (e) => {
                        e.preventDefault();
                        setIsModalVisible($modalType[index]);
                    }, children: option }, option))) })] }));
};
const MenuOptions = styled.div `
  width: 100px;
  position: absolute;
  right: ${({ $right }) => $right ?? 0};
  top: ${({ $top }) => $top ?? 0};
  border: 1px;
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
  background-color: #fff;
  z-index: 1;
`;
const Option = styled.p `
  padding: 7px 12px;
  background-color: #fff;
  color: #333236;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;

  &:hover {
    cursor: pointer;
    color: ${COLORS.Primary};
    background-color: ${COLORS.Grey_100};
  }
`;
