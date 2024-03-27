import { styled } from "styled-components";
import { COLORS } from "../../../constants/colors";
import { DeleteModal } from "../../../components/common/modals/DeleteModal";
import { AddToFolder } from "../../../components/common/modals/AddToFolder";

export const PopOver = ({
  $isPopOverVisible,
  setIsPopOverVisible,
  $options,
  $modalType,
  $top,
  $right,
  $isModalVisible,
  setIsModalVisible,
}) => {
  return (
    <>
      <DeleteModal
        $isModalVisible={$isModalVisible}
        setIsModalVisible={setIsModalVisible}
      ></DeleteModal>
      <AddToFolder
        $isModalVisible={$isModalVisible}
        setIsModalVisible={setIsModalVisible}
      ></AddToFolder>
      <MenuOptions $isVisible={$isPopOverVisible} $top={$top} $right={$right}>
        {$options.map((option, index) => (
          <Option
            key={option}
            onClick={(e) => {
              e.preventDefault();
              setIsModalVisible($modalType[index]);
            }}
          >
            {option}
          </Option>
        ))}
      </MenuOptions>
    </>
  );
};

interface PropsType {
  $right: number;
  $top: number;
  $isVisible: boolean;
}

const MenuOptions = styled.div<PropsType>`
  width: 100px;
  position: absolute;
  right: ${({ $right }) => $right ?? 0};
  top: ${({ $top }) => $top ?? 0};
  border: 1px;
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
  background-color: #fff;
  z-index: 1;
`;

const Option = styled.p`
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