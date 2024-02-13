import './Header.css';
import { useState, useEffect } from 'react';
import {fetchUserData} from '../api';

function Header() {
    const [profileData, setProfileData] = useState(null);
    useEffect(() => {
        fetchUserData(setProfileData);
    }, []);
    return(
        <header>
            <div>
                <h1>
                    <a style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo.png)`}} href="/">Linkbrary</a>
                </h1>
                {profileData ? <a className='profileText' href='https://www.naver.com/'><img src={profileData.profileImageSource} alt='프로필 아이콘'/>{profileData.email}</a> : <a className='login' href="/signin">로그인</a>}
            </div>
        </header>
    )
}

export default Header;