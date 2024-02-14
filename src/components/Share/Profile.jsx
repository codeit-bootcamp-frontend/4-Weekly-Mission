function Profile({profileImg, folderOwner, folderName}){
    return (
        <section className="profile">
        <div className="profile__user">
        <img className="profile__img" alt="유저 프로필 이미지" src={profileImg}/>
        <span className="profile__nickname" >{folderOwner}</span>
        <span className="profile__bookmark">{folderName}</span>
        </div>
    </section>
    )
}
export default Profile;