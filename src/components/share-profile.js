import {useRef} from 'react'

function ShareProfile(){
    return  <section className="profile">
        <div className="profile__user">
        <img ref={userImg} className="profile__img" alt="유저 프로필 이미지"/>
        <span ref={userNickname} className="profile__nickname">1</span>
        <span ref={userBookmark} className="profile__bookmark">2</span>
    </div>
    </section>
}

export default ShareProfile;