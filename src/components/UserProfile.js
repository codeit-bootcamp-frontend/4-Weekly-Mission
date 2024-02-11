import "./UserProfile.css";

export default function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <a type="button" href="./profile.html">
        <img src="images/myprofile.svg" alt="myprofile" />
      </a>
      <span className="user-profile-email">{user.email}</span>
    </div>
  );
}
