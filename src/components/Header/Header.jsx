import React from 'react'
import HeaderNav from './HeaderNav'
import CreateCard from '../../utils/CreateCard'
import { CardContainer } from "./Header.style"
import GlobarNavBar from './GlobarNavBar'

const Header = ({ folderData, userData }) => {
    const folderLinks = folderData.links;
    const folderName = folderData.name;
    return (
        <CardContainer>
            <GlobarNavBar user={userData} />
            <HeaderNav user={userData} folderName={folderName} />
            <header>
                <div className="card-box">
                    {folderLinks && folderLinks.map((link) => (
                        <CreateCard key={link.id} link={link} />
                    ))}
                </div>
            </header>
        </CardContainer>
    )
}

export default Header;