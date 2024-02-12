import React, { useState, useEffect } from 'react';
import '../css/Header.css';
import logo from '../image/logo.svg';
import bottomimg from '../image/Ellipse 21.svg';
import topimg from '../image/myprofile.svg';
import { getUser,getFolder } from '../api';
function Header(){
    const [userInfo, setInfo] = useState({name:'',email:''});
    const [folderInfo,setFolder] = useState({name:'',profile:''});
    const [isuserInfo,setIsUserInfo] = useState(true);
    useEffect(()=>{
        async function getData() {
            const userData = await getUser();
            if (userData && !userData.error) {
                setIsUserInfo(true);
                setInfo(userData);
            } else {
                setIsUserInfo(false);
            }
            
        }
        async function getFolderData(){
            const folderData = await getFolder();
            const folderName =  folderData.folder.name;
            const folderImg = folderData.folder.owner.profileImageSource;
            setFolder({name: folderName,profile:folderImg});
        }
        getData();
        getFolderData();
    },[]);
    const username = userInfo.name;
    const useremail =  userInfo.email;
    
    

    return (
        <div className="headerContainer">
            <div className="headersub">
                <div className="subcontainer">
                    <a href="./">
                        <img src={logo} alt="homelogo"></img>
                    </a>
                    <div className="userInfo">
                        {isuserInfo ? (
                        <>
                        <div className="headerimgContainer">
                            <img src={bottomimg} id="bottomimg" alt = "profile"></img>
                            <img src={topimg} id="topimg" alt = "profile"></img>
                        </div>
                        <span>{useremail}</span>
                        </>
                        ) : (
                            <button  id="login">로그인</button>
                        )}
                    </div>
                </div>
            </div>
            <div className ="headermain">
                <div className = "maininfo">
                    <div className="frameinfo">

                            <img src={folderInfo.profile} id = "folderImg" alt ="folderprofile"></img>
      
                        <span>{username}</span>
                    </div>
                    <div className="bookmarkinfo">
                        <span>{folderInfo.name}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;