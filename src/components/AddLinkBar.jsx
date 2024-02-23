import styled from "styled-components";
import linkIcon from "../assets/linkicon.svg";

const ContainDiv = styled.div`
  display: flex;
  width: 325px;
  padding: 8px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-primary-color, #6d6afe);
  background: var(--Linkbrary-white, #fff);

  @media ${(props) => props.theme.tabletS} {
    width: 704px;
    padding: 16px 20px;
  }

  @media ${(props) => props.theme.desktop} {
    width: 800px;
  }
`;

const AddLinkBarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const AddLinkBarWrappedDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media ${(props) => props.theme.tabletS} {
    gap: 12px;
  }
`;

const AddLinkBarIconImg = styled.img`
  width: 16px;
  height: 16px;

  @media ${(props) => props.theme.tabletS} {
    width: 20px;
    height: 20px;
  }
`;

const AddLinkBarInput = styled.input`
  width: 190px;
  color: var(--Linkbrary-gray60, #9fa6b2);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  outline: none;
  border: none;

  &:focus {
    outline: none;
    border: none;
  }

  @media ${(props) => props.theme.tabletS} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const DesignedBtn = styled.button`
  display: flex;
  width: 85px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  color: var(--Grey-Light, #f5f5f5);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
`;

function AddLinkBar() {
  return (
    <ContainDiv>
      <AddLinkBarDiv>
        <AddLinkBarWrappedDiv>
          <label htmlFor="link">
            <AddLinkBarIconImg src={linkIcon} />
          </label>
          <AddLinkBarInput
            id="link"
            type="text"
            placeholder="링크를 추가해 보세요"
          />
        </AddLinkBarWrappedDiv>
        <DesignedBtn>추가하기</DesignedBtn>
      </AddLinkBarDiv>
    </ContainDiv>
  );
}

export default AddLinkBar;
