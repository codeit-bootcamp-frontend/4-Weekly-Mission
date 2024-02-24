import styled from "styled-components";
import addLinkImg from "../../../assets/img/png/link.png";
const AddLinkInput = styled.input`
  display: flex;
  width: 100%;
  height: 37px
  padding: 16px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  position: relative;

  border-radius: 15px;
  border: 1px solid #6d6afe;
  background: #fff;

  background-image: url(${addLinkImg});
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: left center;
  background-position-x: 20px;

  padding: 25px 45px;
  font-size: 15px;
  
  :focus{
    outline: none;
  }

  &::placeholder{
    color: #9FA6B2;
  }
`;

export default AddLinkInput;
