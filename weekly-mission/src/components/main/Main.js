import {requestFolderInformation} from '../../api.js'
import { useEffect, useState } from 'react';
import FolderIfm from '../folderIfm/FolderIfm';
import './Main.css'
import SearchInput from '../searchInput/SearchInput.js';
import LinkCard from '../linkcard/LinkCard.js';

function Main(){
    const [folderData, setFolderData] = useState();

    useEffect(()=>{
       const getFolderIfm = async () => {
            const data = await requestFolderInformation();
            setFolderData(data);
         
       }
       getFolderIfm();
      
    },[])
 
    return(
        <div id="main">
            <section>
                <div className="section section-folderIfm">
                    <div className='wrap'>
                        {folderData ?  <FolderIfm folderIfm={folderData}/> : '정보 가져오는 중...'}
                    </div>
                </div>
            </section>
            <section>
                <div className='section section-linklist'>
                    <div className='container'>
                        <SearchInput />
                        <div className='link-card__container'>
                           <ul className='link-card__list'>
                                {folderData ? folderData.links.map((v) =><li><LinkCard linkData={v}/></li>) : 'Loading'}
                           </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main;