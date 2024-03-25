import { useEffect } from "react";
import { styled } from "styled-components";
import Link from "../../assets/icons/link.svg";
import { BlueButton } from "../common/BlueButton";
import { forwardRef, SetStateAction, Dispatch } from "react";

interface PropsType {
  setIsVisible: Dispatch<SetStateAction<string>>;
  isAddLinkVisible: boolean;
}

const FolderInput = forwardRef<HTMLDivElement, PropsType>(
  ({ setIsVisible, isAddLinkVisible }, ref) => {
    const onAddLinkButtonClick = () => {
      setIsVisible("폴더 추가");
    };

    return (
      <BackGround ref={ref} $isAddLinkVisible={isAddLinkVisible}>
        {!isAddLinkVisible ? (
          <BackGroundFixed>
            <InputBoxFixed>
              <img src={Link} alt="LinkIcon" />
              <Input placeholder="링크를 추가해 보세요."></Input>
              <BlueButton
                width="80px"
                height="auto"
                padding="10px 16px"
                margin="0px"
                text="추가하기"
                fontSize=""
                radius="8px"
                onBtnHandle={() => onAddLinkButtonClick()}
              ></BlueButton>
            </InputBoxFixed>
          </BackGroundFixed>
        ) : (
          <InputBox $isAddLinkVisible={isAddLinkVisible}>
            <img src={Link} alt="LinkIcon" />
            <Input placeholder="링크를 추가해 보세요."></Input>
            <BlueButton
              width="80px"
              height="auto"
              padding="10px 16px"
              margin="0px"
              text="추가하기"
              fontSize=""
              radius="8px"
              onBtnHandle={() => onAddLinkButtonClick()}
            ></BlueButton>
          </InputBox>
        )}
      </BackGround>
    );
  }
);

export default FolderInput;

const BackGround = styled.div`
  background-color: var(--Grey_100);
  display: flex;
  justify-content: center;
  position: relative;
`;

const BackGroundFixed = styled.div`
  background-color: var(--Grey_100);
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
`;

const InputBox = styled.div<{ margin: string }>`
  width: 800px;
  padding: 16px 20px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: var(--Linkbrary-white, #fff);
  margin: 60px auto 90px;
  display: flex;
  flex-direction: row;

  @media (max-width: 1124px) {
    width: 704px;
  }
  @media (max-width: 774px) {
    width: 325px;
  }
`;

const InputBoxFixed = styled(InputBox)`
  margin: 24px auto;

  @media (max-width: 360px) {
    margin: 16px auto;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  margin-left: 12px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #9fa6b2;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  @media (max-width: 774px) {
    &::placeholder {
      font-size: 14px;
    }
  }
`;
