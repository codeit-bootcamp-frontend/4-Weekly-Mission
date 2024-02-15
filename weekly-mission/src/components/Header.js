import logoImg from '../img/logo.png'
import { requestProfileData } from '../api.js'
import { useEffect, useState } from 'react'
import Profile from './Profile.js'
import Login from './Login.js'
import styled from 'styled-components'

const Header = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 3.2rem 0;
    background-color: #F0F6FF;
    height: 9.3rem;
    z-index: 1000;

    .Header-inner{
        width: 106rem;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .Header-logo{
        display:inline-block;
    }
    @media (max-width : 1124px){
        .Header-inner{
            width : 70.6rem;
        }
    }
    @media (max-width : 790px){
        .Header-inner{
            width : 34rem;
        }     
    }

`;


function HeaderBlock() {
    const [userData, setUserData] = useState();



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