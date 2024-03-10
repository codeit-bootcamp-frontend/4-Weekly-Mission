import styled from "styled-components";
const FaceBookIcon = "../../../assets/facebookShared.svg";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 3.2rem;
`;

export const SharedButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  & img {
    width: 4.2rem;
    height: 4.2rem;
  }
`;

export const CopyLink = styled(SharedButton)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  & img {
    width: 1.8rem;
    height: 1.8rem;
    margin: 1.2rem;
  }
`;

export const IconText = styled.p`
  font-size: 1.3rem;
  line-height: 1.5rem;
  text-align: center;
  color: var(--gray100);
`;

export const FolderName = styled.p`
  color: var(--gray60);
  text-align: center;
  font-size: 1.4rem;
  line-height: 2.2rem;
`;

export const Icon = styled.img`
  width: 4.2rem;
  height: 4.2rem;
`;
