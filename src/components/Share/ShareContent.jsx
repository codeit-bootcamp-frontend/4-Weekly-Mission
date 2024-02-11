import Profile  from "./Profile";
import Content from "../content/Content";
import {useEffect, useState} from 'react';
import { API_PATH_SAMPLE_FOLDER } from "../../services/api-path";
import FETCH_API from "../../services/fetch-data";
function ShaerContent(){
    const [linkList, setLinkList] = useState([]);
    const [userProfile, setUserProfile] = useState({
        profileImg: "",
        folderOwner: "",
        folderName: ""    
    })

    useEffect(() => {
        const folderLoad = async() => {
            try{
                const response = await FETCH_API.get(API_PATH_SAMPLE_FOLDER);
                if(!response.ok){
                    throw new Error("폴더 로드 에러 발생");
                }
                const result = await response.json();
                setUserProfile({
                    profileImg: result.folder.owner.profileImageSource,
                    folderOwner: result.folder.owner.name,
                    folderName: result.folder.name
                })
                setLinkList(result.folder.links);
            }catch(error){
                console.error(error);
            }
        }
        folderLoad();
    }, [])

    return (
        <main className="folder">
            <Profile {...userProfile}/>
            <Content linkList={linkList} option={false}/>
        </main>
    )
}

export default ShaerContent;