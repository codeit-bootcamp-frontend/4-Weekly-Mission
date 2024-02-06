import './Profile.css'

function Profile({userData}){
  
    return (
        <div className="Profile">
            <div className="Profile-img">
                <img src={userData.profileImageSource} alt="프로필사진"/>
            </div>
            <p className="Profile-email">
                {userData.email}
            </p>
        </div>
    )
}



export default Profile;