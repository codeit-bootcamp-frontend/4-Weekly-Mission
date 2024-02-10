import Profile  from "./Profile";
import Content from "../content/Content";
import {useEffect, useState} from 'react';
import { API_PATH_SAMPLE_FOLDER } from "../../services/api-path";

function ShaerContent(){
    const [linkList, setLinkList] = useState([]);
    const [userProfile, setUserProfile] = useState({
        profileImg: "",
        folderOwner: "",
        folderName: ""    
    })

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
                if(!response.ok){
                    throw new Error("API 요청 에러 발생");          
                }
                setUserProfile({
                    profileImg: result.folder.owner.profileImageSource,
                    folderOwner: result.folder.owner.name,
                    folderName: result.folder.name
                })
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

    return (
    <main className="folder">
        <Profile {...userProfile}/>
        <Content linkList={linkList} option={false}/>
    </main>
    )
}

export default ShaerContent;