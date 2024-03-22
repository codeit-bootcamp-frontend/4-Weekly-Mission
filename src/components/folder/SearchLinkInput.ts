import styled from "styled-components";
import addSearchImg from "../../assets/img/svg/search.svg";
const SearchLinkInput = styled.input`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  position: relative;

  border-radius: 10px;
  background: #f5f5f5;
  border: none;

  background-image: url(${addSearchImg});
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: left center;
  background-position-x: 20px;

  padding: 20px 45px;
  font-size: 15px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #9fa6b2;
  }
`;

export default SearchLinkInput;
