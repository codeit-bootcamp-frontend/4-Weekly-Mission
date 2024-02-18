import { useEffect } from "react";
import { folderLinksData } from "../../apis/apiFolder";
import { useRecoilState } from "recoil";
import { folderLinkContents } from "../../store/store";
import { timeChange, dateChange } from "../../dateFunction";
import styled from "styled-components";

const FolderNoData = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    font-size: 1.6rem;
    font-family: 'Pretendard';
    margin-top: 40px;
    @media screen and (max-width: 768px) {
        margin-top: 32px;
        font-size: 1.4rem;
    }
`

function FolderContents() {
    const [contents, setContents] = useRecoilState(folderLinkContents);
    useEffect(() => {
        folderLinksData('all')
            .then((data) => setContents(data))
            .catch((error) => {console.error(error)});
    }, [])
    return(
        <article>
                {
                    contents?.data?.length === 0 ? <FolderNoData>저장된 링크가 없습니다.</FolderNoData> : 
                    <ul className='contentsBox'>
                        {
                            contents?.data?.map(({ id, title, image_source, created_at, url, description }) => {
                                return(
                                    <li key={id}>
                                        <a href={url} target='_blank' rel="noreferrer">
                                            <div className='imgBox'>
                                                <img className="contentsImg" src={image_source ? image_source : `${process.env.PUBLIC_URL}/images/noImage.jpg`} alt={title}/>
                                                <button type="button"><img src={`${process.env.PUBLIC_URL}/images/star.svg`} alt="즐겨찾기 추가" /></button>
                                            </div>
                                            <div className='textBox'>
                                                <button type="button"><img src={`${process.env.PUBLIC_URL}/images/kebab.png`} alt="더보기" /></button>
                                                <span>{timeChange(created_at)}</span>
                                                <p className='description'>{description}</p>
                                                <p className='date'>{dateChange(created_at)}</p>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                }
        </article>
    )
}

export default FolderContents;