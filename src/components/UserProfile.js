import "./UserProfile.css";

export default function UserProfile({ user }) {
  console.log(user);
  return (
    <div className="user-profile">
      <a type="button" href="./profile.html">
        <img
          className="user-profile-image"
          src={user.profileImageSource}
          alt="myprofile"
        />
      </a>
      <span className="user-profile-email">{user.email}</span>
    </div>
  );
}
