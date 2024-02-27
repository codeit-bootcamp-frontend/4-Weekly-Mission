import React from "react";
import Avatar from "../../sharing/ui-user/Avatar";
import styled from "styled-components";

const FolderOwner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const UserProfile = ({ folderInfo }) => {
  return (
    <FolderOwner>
      <Avatar
        avatarImage={folderInfo.folderOwnerImage}
        width="60px"
        height="60px"
      ></Avatar>
      <div className="font-thin font-16px">@{folderInfo.folderOwner}</div>
    </FolderOwner>
  );
};

export default UserProfile;
