import styled from "styled-components";
import { LoadingAnimation } from "./style";

const LoadingProfileImg = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background-color: #dbdbdb;
  padding-right: 1rem;
`;

const LoadingProfileEmail = styled.div`
  width: 8rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  background-color: #dbdbdb;
  padding-right: 1rem;
`;

const LoadingProfile = () => {
  return (
    <LoadingAnimation>
      <div className="Profile">
        <LoadingProfileImg />
        <LoadingProfileEmail />
      </div>
    </LoadingAnimation>
  );
};

export default LoadingProfile;
