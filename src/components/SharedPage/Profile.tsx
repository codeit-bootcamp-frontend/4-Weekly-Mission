import './Profile.css';

interface ProfileProps {
  profile: {
    name: string;
    profileImageSource: string;
  };
  folderName: string;
}

const Profile = ({ profile, folderName }: ProfileProps) => {
  return (
    <div>
      <div className='profile'>
        <div className='profile-image'>
          <img src={profile.profileImageSource} alt='프로필 이미지' />
        </div>
        <div className='profile-info'>
          <h1>@{profile.name || 'No Name'}</h1>
          <h2>{folderName || 'No Folder Name'}</h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
