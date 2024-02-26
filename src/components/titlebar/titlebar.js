import {useFavoriteList} from '../../hooks/useFavoriteList'
import shared from '../../assets/image/share.svg'
import pen from '../../assets/image/pen.svg'
import deleteIcon from '../../assets/image/delete.svg';
import './titlebar.css';
export const TitleBar=({selectItem})=>{
 
    console.log(selectItem);

    

    return(
        <div className='titlebar-container'>
            <div >{selectItem?.name ?? '전체'}</div>
            <div className='titlebar-menu'>
                <div><img src={shared}/>공유</div>
                <div><img src={pen}/>이름 변경</div>
                <div><img src={deleteIcon}/>삭제</div>
            </div>
        </div>
    )
}