import { useEffect, useState } from "react";
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
const KebabModal = styled.ul`
    z-index: 2;
    position: absolute;
    bottom: 40px; right: -59px;
    width: 100px;
    box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.10);

    li:last-of-type button {
        background: rgba(231, 239, 251, 1);
        color: rgba(109, 106, 254, 1);
    }

    button {
        width: 100%;
        background: #fff;
        border: none;
        padding: 7px 0px;
        font-size: 1.4rem;
        font-family: 'Pretendard';
    }
`

function FolderContents() {
    const [contents, setContents] = useRecoilState(folderLinkContents);
    useEffect(() => {
        folderLinksData('all')
            .then((data) => setContents(data))
            .catch((error) => {console.error(error)});
    }, [])
    const [kebabOpen, setKebabOpen] = useState('');
    const handleKebab = (event, id) => {
        event.preventDefault();
        if(kebabOpen !== id) {
            setKebabOpen(id);
        } else {
            setKebabOpen('');
        }
    }
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
                                                <button onClick={(event) => handleKebab(event, id)} type="button"><img src={`${process.env.PUBLIC_URL}/images/kebab.png`} alt="더보기" /></button>
                                                <span>{timeChange(created_at)}</span>
                                                <p className='description'>{description}</p>
                                                <p className='date'>{dateChange(created_at)}</p>
                                                {
                                                    kebabOpen === id ? 
                                                    <KebabModal>
                                                        <li>
                                                            <button>삭제하기</button>
                                                        </li>
                                                        <li>
                                                            <button>폴더에 추가</button>
                                                        </li>
                                                    </KebabModal> 
                                                    : null
                                                }
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