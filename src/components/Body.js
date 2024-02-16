import "./Body.css";
import searchImg from "../assets/Search.svg";
import CardList from "./CardList.js";
import { getCards } from "../api.js";
import { useEffect, useState } from "react";

function Body() {
    const [items, setItems] = useState([]);

    const handleLoad = async () => {
        let result;
        try {
            result = await getCards();
        } catch (error) {
            console.error(error);
            return;
        }

        const { folder } = result;
        setItems(folder.links);
    };

    useEffect(() => {
        handleLoad();
    }, []);

    return (
        <div className="body">
            <div className="body_inner">
                <div className="body_search_bar">
                    <div className="search">
                        <img src={searchImg} alt="" />
                        <p>링크를 검색해 보세요.</p>
                    </div>
                </div>
                <CardList items={items} />
            </div>
        </div>
    );
}

export default Body;
