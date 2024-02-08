import Profile  from "./Profile";
import Input from "./Input";
import CardList from "./CardList";
import {useEffect, useState} from 'react';
import { API_PATH_SAMPLE_FOLDER } from "../services/api-path";

function ShaerContent(){
    const [profileImg, setProfileImg] = useState(null);
    const [folderOwner, setFolderOwner] = useState(null);
    const [folderName, setFolderName] = useState(null);
    const [linkList, setLinkList] = useState([]);
   

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
                setLinkList(result.folder.links);
            }catch(e){
                console.error(e);
            }
        }   
        folderLoad();
        // 중복  처리
        return () => {
            controller.abort();
        }
    }, []);

    return  <main className="folder">
        <Profile profileImg={profileImg} folderOwner={folderOwner} folderName={folderName}/>

    <section className="content"> 
        <Input className="content__search" type="search" placeholder="🔍   링크를 검색해 보세요."/>
        <CardList linkList={linkList} option={false}/>
    </section>
    </main>
}

export default ShaerContent;