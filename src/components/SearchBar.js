import styled, { css } from "styled-components";
import Button from "./Button";

const SearchBar = ({ type }) => {
  const Image = styled.img`
    position: absolute;
    left: 20px;
  `;
  const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  `;
  const AddBtn = styled(Button)`
    position: absolute;
    top: 20%;
    bottom: 20%;
    right: 2%;

    padding: 10px 16px 10px 16px;
  `;

  const defaultSearchBarStyle = css`
    position: relative;
  `;

  const FindLink = styled.div`
    ${defaultSearchBarStyle};
    width: 100%;

    ${Image} {
      top: 34%;
    }

    ${Input} {
      padding: 15px 16px 15px 44px;

      background-color: #f5f5f5;

      border: none;
      border-radius: 10px;
    }
  `;

  const AddLink = styled.div`
    ${defaultSearchBarStyle};
    width: 60%;
    margin: auto;
    text-align: center;

    ${Image} {
      top: 28%;
    }

    ${Input} {
      padding: 20px 20px 20px 50px;

      background-color: var(--color-white);

      border: 1px solid var(--color-primary);
      border-radius: 15px;
    }

    ${AddBtn} {
      position: absolute;
      top: 20%;
      bottom: 20%;
      right: 2%;

      padding: 10px 16px 10px 16px;
    }
  `;

  return type === "findLink" ? (
    <FindLink>
      <Image src="/icons/search_icon.svg" alt="search icon" />
      <Input type="text" placeholder="링크를 검색해 보세요." />
    </FindLink>
  ) : type === "addLink" ? (
    <AddLink>
      <Image src="/icons/link_icon.svg" alt="search icon" />
      <AddBtn>추가하기</AddBtn>
      <Input type="text" placeholder="링크를 추가해 보세요." />
    </AddLink>
  ) : null;
};

export default SearchBar;
