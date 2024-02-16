import styled from "styled-components";
import FooterBlock from "../components/Footer";
import HeaderBlock from "../components/Header";
import LinkAddInput from "../components/LinkAddInput";
import LinkCard from "../components/LinkCard";
import Loading from "../components/Loading";
import OwnerInformation from "../components/OwnerInformation";
import SearchInput from "../components/SearchInput";
import './Folder.css'
import { useEffect, useState } from "react";
import { requestFolderListData } from "../api";
import CategoryBar from "../components/CategoryBar";



const NotLink = styled.div`
    font-size : 1.6rem;
    text-align :center;
    font-weight : 400;
    flex: 1;
`;


function Folder() {
    const [categoryData, setCategoryData] = useState(null);

    useEffect(() => {
        const getFolderListData = async () => {
            const response = await requestFolderListData();
            const data = response.data;
            setCategoryData(data);
        }
        getFolderListData();

    }, [])

    return (
        <>
            <HeaderBlock />
            <main id="main">
                <section className="section owner-information">
                    <LinkAddInput />
                </section>
                <section className="section linkcards">
                    <div className="container">
                        <SearchInput />
                        <div className="wrap">
                            <CategoryBar categoryList={categoryData}/>
                            <ul className="linkcard-list">
                                <NotLink>저장된 링크가 없습니다.</NotLink>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <FooterBlock />
        </>
    )
}

export default Folder;