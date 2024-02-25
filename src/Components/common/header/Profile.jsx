import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const Image = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

const UserEmail = styled.p`
  color: var(--Linkbrary-gray100, #373740);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;

  @media (max-width: 767px) {
    display: none;
  }
`;

function Profile({ user }) {
  const { email, image_source } = user.data[0];

  return (
    <Container>
      <Image src={image_source} alt={image_source} />
      <UserEmail>{email}</UserEmail>
    </Container>
  );
}

export default Profile;
