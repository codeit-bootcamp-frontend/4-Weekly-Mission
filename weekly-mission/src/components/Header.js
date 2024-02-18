import logoImg from '../img/logo.png'
import { requestProfileData } from '../api.js'
import { useEffect, useState } from 'react'
import Profile from './Profile.js'
import Login from './Login.js'
import styled, { css } from 'styled-components'
import { useLocation } from 'react-router-dom'

const Header = styled.header`
    width: 100vw;
    padding: 3.2rem;
    background-color: #F0F6FF;
    height: 9.3rem;
    position : fixed;
    top:0;
    left : 0;
    z-index : 1000;

    .Header-inner{
        max-width: 106rem;
        width:100%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .Header-logo{
        display:inline-block;
    }
   

`;


function HeaderBlock() {
    const [userData, setUserData] = useState();
    // const location = useLocation();
    // const value = location.pathname !== 'folder' ? 'fixed' : null;


    useEffect(() => {
        const getUserProfile = async () => {
            const data = await requestProfileData();
            setUserData(data);

        }
        getUserProfile();
    }, [])



    return (
        <Header>
            <div className="Header-inner">
                <a href="/" className="Header-logo">
                    <h1>
                        <img src={logoImg} alt="Linkbrary 로고 이미지" />
                    </h1>
                </a>
                {userData !== undefined ? <Profile userData={userData} /> : <Login />}
            </div>
        </Header>
    )
}

export default HeaderBlock;