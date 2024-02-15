
import {
    ONEYEAR_MILLISECONDS,
    ONEMONTH_MILLISECONDS,
    ONEDAY_MILLISECONDS,
    ONEHOUR_MILLISECONDS,
    ONEMINUTE_MILLISECONDS
} from '../constant.js'
import styled from 'styled-components';

const LinkCardBlock = styled.div`
    width: 340px;
    height: 334px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    overflow: hidden;
    transition: .5s;

    &:hover{
        transform: translate(-3px,-3px);
        box-shadow: 5px 5px 13px rgba(0, 0, 0, 0.5);
    }
    
    .card-img{
        width: 100%;
        height: 20rem;
    }

    .card-img > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card-content{
        padding: 1.5rem 2rem;
   
    }

    .content{
        font-weight: 400;
        display: inline-block;
    }

    .content:not(:last-child){
        margin-bottom: 1rem;
    }

    .elapsed-time{
        font-size: 1.3rem;
        color: #666;
   
    }


    .card-description{
        font-size: 1.6rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* 라인수 */
        -webkit-box-orient: vertical;
        word-wrap:break-word; 
        line-height: 1.2em;
        height: 2.4em;
    }

    .create-date{
        color: #333;
        font-size: 1.4rem;
    }
`;


function LinkCard({ linkData }) {
    const { createdAt, url, description, imageSource } = linkData;
    const createDate = new Date(createdAt);
    const millisecondsGap = new Date() - createDate;


    const getTime = (value) => {
        let milliseconds = value;
        if (milliseconds / ONEYEAR_MILLISECONDS >= 2) {
            return `${Math.floor(milliseconds / ONEYEAR_MILLISECONDS)} years ago`
        } else if (milliseconds / ONEYEAR_MILLISECONDS >= 1) {
            return `1 year ago`
        } else if (milliseconds / ONEMONTH_MILLISECONDS >= 2) {
            return `${Math.floor(milliseconds / ONEMONTH_MILLISECONDS)} months ago`
        } else if (milliseconds / ONEMONTH_MILLISECONDS >= 1) {
            return `1 month ago`
        } else if (milliseconds / ONEDAY_MILLISECONDS >= 2) {
            return `${Math.floor(milliseconds / ONEDAY_MILLISECONDS)} days ago`
        } else if (milliseconds / ONEDAY_MILLISECONDS >= 1) {
            return `1 day ago`
        } else if (milliseconds / ONEHOUR_MILLISECONDS >= 2) {
            return `${Math.floor(milliseconds / ONEHOUR_MILLISECONDS)} hours ago`
        } else if (milliseconds / ONEHOUR_MILLISECONDS >= 1) {
            return `1 hour ago`
        } else if (milliseconds / (1000 * 60) >= 2) {
            return `${Math.floor(milliseconds / ONEMINUTE_MILLISECONDS)} minutes ago`
        } else {
            return `1 minute ago`
        }
    }

    return (
        <a href={url} target='_blank'>
            <LinkCardBlock>
                <div className="card-img">
                    <img src={imageSource} alt="링크카드 이미지" />
                </div>
                <div className="card-content">
                    <span className="elapsed-time content">{getTime(millisecondsGap)}</span>
                    <p className="card-description content">{description}</p>
                    <span className="create-date content">
                        {`${createDate.getFullYear()}. ${createDate.getMonth() + 1}. ${createDate.getDate()}`}
                    </span>
                </div>
            </LinkCardBlock>
        </a>

    );
};



export default LinkCard;