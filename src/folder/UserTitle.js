import './UserTitle.css';

function UserTitle({userData}) { 
    const titleName = userData.name;
    return(
        <article className="userTitle">
            <div>
                <div className="titleTop">
                    <img src={userData?.owner?.profileImageSource}/>
                    <p>{userData?.owner?.name}</p>
                </div>
                <div className="titleBottom">
                    <h2>{titleName}</h2>
                </div>
            </div>
        </article>
    )
}

export default UserTitle;