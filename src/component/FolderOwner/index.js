import styled from "styled-components";
import "./FolderOwner.css";

const SharedPageName = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
`;

const FolderOwner = ({ name, owner = {} }) => {
  return (
    <div className="FolderOwner">
      <img src={owner.profileImageSource} alt="폴더 소유자 프로필 이미지" />
      <div>{owner.name}</div>
      <SharedPageName>{name}</SharedPageName>
    </div>
  );
};

export default FolderOwner;
