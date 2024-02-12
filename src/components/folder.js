import { useEffect, useState } from "react";

function folder(){
    const [folderData,setFolderData]=useState(null);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder');
                const data = await response.json();
                if (response.ok) {
                    setFolderData(data.folder.links);
                }
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    },[]);
}
export default folder;