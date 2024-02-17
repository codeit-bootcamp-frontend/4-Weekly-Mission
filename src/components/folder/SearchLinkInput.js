import styled from "styled-components";
import addSearchImg from "../../assets/img/svg/search.svg";
const SearchLinkInput = styled.input`
  display: flex;
  width: 100%;
  height: 37px
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  
  position: relative;

  border-radius: 10px;
  background: #F5F5F5;
  border: none;

  background-image: url(${addSearchImg});
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: left center;
  background-position-x: 20px;

  padding: 20px 45px;
  font-size: 15px;

  :focus{
    outline: none;
  }

  &::placeholder{
    color: #9FA6B2;
  }
`;

export default SearchLinkInput;
