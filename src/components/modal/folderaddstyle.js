
import { useState } from 'react';
import './folderaddstyle.css';
import { useFavoriteList } from '../../hooks/useFavoriteList';

export const FolderAddStyle = () =>{
    const [title, setTitle] =useState('');
    // const {data}=useFavoriteList();
    
    return(
        <div className="modal_container">
            <h2>폴더 이름 변경</h2>
            <input value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            <button >변경하기</button>
        </div>
    )
}