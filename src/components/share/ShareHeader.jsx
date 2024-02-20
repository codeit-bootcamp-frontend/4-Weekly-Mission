import { styled } from 'styled-components';

const Styled = {
  Container: styled.div`
    width: 100vw;
    position: relative;

    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.background};
  `,

  InnerWrap: styled.div`
    padding: 2rem 0 6rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `,

  Avatar: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  `,

  AvatarImg: styled.img`
    width: 6rem;
    height: 6rem;
  `,

  AvatarText: styled.span`
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.color.black};
  `,

  FolderName: styled.h1`
    font-size: 4rem;
    font-weight: 600;
    line-height: 4.7rem;
    color: ${({ theme }) => theme.color.black};
  `,
};

function ShareHeader({ folderData }) {
  const owner = folderData?.owner || {};
  const folderName = folderData?.name || '@ 코드잇';

  return (
    <Styled.Container>
      <Styled.InnerWrap>
        <Styled.Avatar>
          <Styled.AvatarImg src={owner.profileImageSource} alt="폴더 소유자 프로필" />
          <Styled.AvatarText>{owner.name}</Styled.AvatarText>
        </Styled.Avatar>
        <Styled.FolderName>{folderName}</Styled.FolderName>
      </Styled.InnerWrap>
    </Styled.Container>
  );
}

export default ShareHeader;
