import { styled } from 'styled-components';
import codeitAvatar from 'assets/icon/codeitIcon.svg';

const Styled = {
  Container: styled.div`
    width: 100%;
    padding-top: 9.3rem;

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

const mockData = {
  id: 1,
  name: '⭐️ 즐겨찾기',
  owner: {
    id: 2,
    name: '@ 코드잇',
    profileImageSource: codeitAvatar,
  },
};

function Header() {
  return (
    <Styled.Container>
      <Styled.InnerWrap>
        <Styled.Avatar>
          <img src={mockData.owner.profileImageSource} alt="폴더 소유자 프로필" />
          <Styled.AvatarText>{mockData.owner.name}</Styled.AvatarText>
        </Styled.Avatar>
        <Styled.FolderName>{mockData.name}</Styled.FolderName>
      </Styled.InnerWrap>
    </Styled.Container>
  );
}

export default Header;
