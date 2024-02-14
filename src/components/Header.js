import './Header.css';
import { useState, useEffect } from 'react';

function Header() {
    const [profileData, setProfileData] = useState(null);
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
                if (response.ok) {
                    const userProfileData = await response.json();
                    setProfileData(userProfileData);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchUserData();
    }, []);
    return(
        <header>
            <div>
                <h1>
                    <a style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo.png)`}} href="/">Linkbrary</a>
                </h1>
                {profileData ? <a className='profileText' href='#'><img src={profileData.profileImageSource} />{profileData.email}</a> : <a className='login' href="/signin">로그인</a>}
            </div>
        </header>
    )
}

export default Header;