import styled from "styled-components";
import FooterBlock from "../components/Footer";
import HeaderBlock from "../components/Header";
import LinkAddInput from "../components/LinkAddInput";
import SearchInput from "../components/SearchInput";
import './Folder.css'
import { useCallback, useEffect, useState } from "react";
import { requestFolderLinkData, requestFolderListData } from "../api";
import CategoryBar from "../components/CategoryBar";
import { useNavigate, useParams } from "react-router-dom";



const NotLink = styled.div`
    font-size : 1.6rem;
    text-align :center;
    font-weight : 400;
    flex: 1;
`;

const CurrentCategory = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    h2{
        font-size : 2.4rem;
        font-weight : 600;
        color : #000;
    }
`;


function Folder() {
    const [categoryData, setCategoryData] = useState(null);
    const [currentCategory, setCurrentCategory] = useState('전체');
    const [folderLinkList, setFolderLinkList] = useState(null);
    const params = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        navigate('all');

        const getFolderListData = async () => {
            const response = await requestFolderListData();
            const data = response.data;
            setCategoryData(data);
        }
        getFolderListData();

    }, []);

    useEffect(() => {
        const folderId = params.folderId === 'all' ? null : params.folderId;
        const getFolderLinkData = async (folderId) => {
            const response = await requestFolderLinkData(folderId);
            const data = response.data;
            console.log(data);
            const filterData = data.filter(link => {
                return link.folder_id === folderId
            });
            console.log(filterData)
            setFolderLinkList(filterData);
        }
        getFolderLinkData(folderId);
    },[currentCategory])

    const onClickCategory = (category) => {
        setCurrentCategory(category);
    }
    

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
                            <CategoryBar categoryList={categoryData} onClick={onClickCategory}/>
                            <CurrentCategory>
                                <h2>{currentCategory}</h2>
                                <div>

                                </div>
                            </CurrentCategory>
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