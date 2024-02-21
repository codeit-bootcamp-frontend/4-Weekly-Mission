import {
  ProfileSummary,
  Figure,
  ProfileImage,
  Figcaption,
  Header,
} from './profileStyle';

const Profile = ({ name, owner }) => {
  return (
    <ProfileSummary>
      <Figure>
        <ProfileImage
          src={owner.profileImageSource}
          alt={`${owner.name}의 프로필`}
        />
        <Figcaption>@{owner.name}</Figcaption>
      </Figure>
      <Header>
        <h2>{name}</h2>
      </Header>
    </ProfileSummary>
  );
};

export default Profile;
