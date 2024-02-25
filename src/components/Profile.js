import './Profile.css';
import profileImg from '../assets/myprofile.svg';

const Profile = ({ email }) => {
  return (
    <div className="profile_area">
      <div className="profile_background">
        <img className="profile_img" src={profileImg} alt="profile" />
      </div>
      <p className="profile_id">{email}</p>
    </div>
  );
};

export default Profile;
