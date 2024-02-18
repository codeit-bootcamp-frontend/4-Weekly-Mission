import {
  FolderSummary,
  Figure,
  ProfileImage,
  Figcaption,
  Header,
} from './folderStyle';

const Folder = ({ name, owner }) => {
  return (
    <FolderSummary>
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
    </FolderSummary>
  );
};

export default Folder;
