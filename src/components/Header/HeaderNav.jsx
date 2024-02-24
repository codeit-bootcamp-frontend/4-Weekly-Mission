import React from 'react'
import { HeaderNavContainer } from './HeaderNav.style'

const HeaderNav = ({ user, folderName }) => {
    return (
        <>
            <nav>
                <HeaderNavContainer>
                    <div className="user-box">
                        <img
                            className="user-profile"
                            src={user?.profileImageSource}
                            alt="프로필 이미지"
                        />
                        <p className="user-name">@{user?.name}</p>
                    </div>
                    <p className="menu">{folderName}</p>
                </HeaderNavContainer>
            </nav>
        </>
    )
}

export default HeaderNav;