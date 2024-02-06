import logoImg from '../../img/logo.png'
import './Header.css'
import {requestProfileData} from '../../api.js'
import { useEffect, useState } from 'react'
import Profile from '../profile/Profile.js'
import Login from '../login/Login.js'


function Header() {
    const [userData, setUserData] = useState();


   
    useEffect(()=>{
        const getUserProfile = async () => {
            const data = await requestProfileData();
            setUserData(data);
        }
        getUserProfile();
    },[])


    return (
        <div id="Header">
            <div className="Header-inner">
                <a href="/" className="Header-logo">
                    <img src={logoImg} alt="Linkbrary 로고 이미지" />
                </a>
                {userData !== undefined ? <Profile userData={userData} /> : <Login/>}
            </div>
        </div>
    )
}

export default Header;