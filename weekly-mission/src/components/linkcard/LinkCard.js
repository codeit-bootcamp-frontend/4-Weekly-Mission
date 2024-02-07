import './LinkCard.css'
import{
    ONEYEAR_MILLISECONDS,
    ONEMONTH_MILLISECONDS,
    ONEDAY_MILLISECONDS,
    ONEHOUR_MILLISECONDS,
    ONEMINUTE_MILLISECONDS
} from '../../constant.js'
function LinkCard({linkData}) {
    const {createdAt , url, description,imageSource} = linkData;
    const createDate = new Date(createdAt);
    const millisecondsGap =  new Date() - createDate;
   
    
    const getTime = (value) => {
        let milliseconds = value;
        if(milliseconds / ONEYEAR_MILLISECONDS >= 2){
            return `${Math.floor(milliseconds / ONEYEAR_MILLISECONDS)} years ago`
        }else if(milliseconds / ONEYEAR_MILLISECONDS >= 1){
            return `1 year ago`
        }else if(milliseconds /ONEMONTH_MILLISECONDS >= 2){
            return `${Math.floor(milliseconds /ONEMONTH_MILLISECONDS)} months ago`
        }else if(milliseconds /ONEMONTH_MILLISECONDS >= 1){
            return `1 month ago`
        }else if(milliseconds / ONEDAY_MILLISECONDS >= 2){
            return `${Math.floor(milliseconds / ONEDAY_MILLISECONDS)} days ago`
        }else if(milliseconds / ONEDAY_MILLISECONDS >= 1){
            return `1 day ago`
        }else if(milliseconds / ONEHOUR_MILLISECONDS >= 2){
            return `${Math.floor(milliseconds / ONEHOUR_MILLISECONDS)} hours ago`
        }else if(milliseconds / ONEHOUR_MILLISECONDS >= 1){
            return `1 hour ago`
        }else if(milliseconds / (1000 * 60) >= 2){
            return `${Math.floor(milliseconds / ONEMINUTE_MILLISECONDS)} minutes ago`
        }else{
            return `1 minute ago`
        }
    }
   
    return (
        <a href={url} target='_blank'>
            <div className="LinkCard">
                <div className="card-img">
                    <img src={imageSource} alt="카드 이미지"/>          
                </div>
                <div  className="card-content">
                    <span className="elapsed-time content">{getTime(millisecondsGap)}</span>
                    <p className="card-description content">{description}</p>
                    <span className="create-date content">
                        {`${createDate.getFullYear()}. ${createDate.getMonth() + 1}. ${createDate.getDate()}`}
                    </span>
                </div>
            </div>
        </a>
 
    )
}



export default LinkCard;