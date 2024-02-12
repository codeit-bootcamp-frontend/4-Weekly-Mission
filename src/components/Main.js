import Card from './card';
import '../css/main.css'
import { getFolder } from '../api';
import searchIcon from '../image/Search.svg';
import { useEffect, useState } from 'react';

function Main(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        async function getFolderData(){
            const result = await getFolder();;
            const { folder } = result;
            setData(folder.links);
        }
        getFolderData();
    },[])
    
    // console.log(data);
    return(
        <div className='mainContainer'>
            <div className='mainframe'>
                <div className='searchbar'>
                    <input id='searchtopic' ></input>
                    <img src = {searchIcon} id ="searchIcon" alt = "searchIcon"></img>
                    <span>링크를 검색해 보세요</span>
                </div>
            </div>
            <div className='gridframe'>
                <Card items = {data}></Card>
            </div>
        </div>
    )
}

export default Main;