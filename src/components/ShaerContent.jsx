import getTimeDiff from "../utils/getTimeDiff";
import getCoustomDate from "../utils/getCoustomDate";
import {useEffect, useState} from 'react';
import { API_PATH_SAMPLE_FOLDER } from "../services/api-path";
import Card from "./Card";


function ShaerContent(){
    const [profileImg, setProfileImg] = useState(null);
    const [folderOwner, setFolderOwner] = useState(null);
    const [folderName, setFolderName] = useState(null);
    const [userLinkArray, setUserLinkArray] = useState([]);
   

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const folderLoad = async () => {
            try{
                const response = await fetch(API_PATH_SAMPLE_FOLDER, {
                    method: "GET",
                    signal
                   });
                const result = await response.json();
                // console.table(result.folder.links)
                if(!response.ok){
                    throw new Error("API 요청 에러 발생");          
                }
                setProfileImg(result.folder.owner.profileImageSource);
                setFolderOwner(result.folder.owner.name);
                setFolderName(result.folder.name);
                setUserLinkArray(result.folder.links);
            }catch(e){
                console.error(e);
            }
        }   
        folderLoad();
        // 언마운트 실행 strictMode라서 한번 언마운트 된다.
        return () => {
            controller.abort();
        }
    }, []);

    return  <main className="folder">
        <section className="profile">
        <div className="profile__user">
        <img className="profile__img" alt="유저 프로필 이미지" src={profileImg}/>
        <span className="profile__nickname" >{folderOwner}</span>
        <span className="profile__bookmark">{folderName}</span>
    </div>
    </section>
    <section className="content"> 
        <input className="content__search" type="search" placeholder="🔍   링크를 검색해 보세요."/>
        <div className="content__cards">
            <div
            style={{
                display : userLinkArray.length ? "none" : "block",
            }}
            className="content__blank">저장된 링크가 없습니다</div>
            {userLinkArray.map(link => {
                const {id, createdAt, imageSource, description, url} = link;
                const createDate = new Date(createdAt);
                const timeDiffText = getTimeDiff(createdAt);
                const coustomDate = getCoustomDate(createDate);
                return <Card key={id} date={coustomDate} url={url} imgSrc={imageSource} timeDiff={timeDiffText} content={description}></Card>
            })}
        </div>
    </section>
    </main>
}

export default ShaerContent;