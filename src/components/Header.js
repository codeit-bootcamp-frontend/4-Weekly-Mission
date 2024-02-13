import Gnb from "./Gnb";
import "./Header.css";
import avatarImg from "../assets/Avatar.png";
import { useEffect, useState } from "react";
import { getUserInfo } from "../api";

function Header() {
    const [items, setItems] = useState([]);
    const [hasUserData, setHasUserData] = useState(false);

    const handleLoad = async () => {
        let result;
        try {
            result = await getUserInfo();
            setItems(result);
            setHasUserData(true);
        } catch (error) {
            console.error(error);
            setHasUserData(false);
            return;
        }
    };

    useEffect(() => {
        handleLoad();
    }, []);

    return (
        <div className="header">
            <Gnb email={items.email} hasUserData={hasUserData} />
            <div className="header_contents">
                <div className="header_inner">
                    <div className="header_user">
                        <div className="header_user_avatar">
                            <img src={avatarImg} alt="" />
                        </div>
                        <div className="header_user_name">@{items.name}</div>
                    </div>
                    <div className="header_title">⭐️ 즐겨찾기</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
