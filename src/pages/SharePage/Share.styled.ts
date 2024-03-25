import styled from 'styled-components';

export const Share = styled.div`
  width: 100%;
  max-width: 1920px;
  min-width: 375px;
  background-color: white;
`;

export const Profile = styled.section`
  background-color: var(--Linkbrary-bg);
  width: 100%;
  padding: 1.25rem 0 3.75rem;
`;

export const ProfileBox = styled.div`
  margin: 0 auto;
  text-align: center;
  width: auto;
  display: flex;
  flex-direction: column;
`;

export const ProfileImg = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  margin: 0 auto;
`;

export const ProfileNickname = styled.span`
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 0.75rem;
`;

export const ProfileBookmark = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
  margin-top: 1.25rem;
`;
