import './modal.css';
import styled from 'styled-components';
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { clickFolder, contentsLink, folderContents } from "../../store/store";
import { folderLinksData } from '../../apis/apiFolder';
import { useEffect, useState} from 'react';
const { Kakao } = window;

const ModalButton = styled.button`
    cursor: pointer;
    width: 100%;
    padding: 16px 20px;
    color:  #fff;
    font-size: 16px;
    font-weight: 600;
    background: ${({background}) => background === `blue` ? `linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%);` : `rgba(255, 91, 86, 1)` };
    border-radius: 8px;
    border : none;
`
function FolderName() {
    const folderName = useRecoilValueLoadable(folderContents);
    const [modalFolderContents, setModalFolderContents] = useState([]);
    const [test, setTest] = useState('');
    const handleFolderCheck = (name) => {
        setTest(name);
    };
    
    useEffect(() => {
        folderName.contents.data.forEach(({id}) => {
            folderLinksData(id)
            .then(data => setModalFolderContents((a) => [...a, data]))
            .catch(error => console.error(error));
        });
    }, []);

    return(
        <ul className='folderAddModal'>
            {
                folderName?.contents?.data?.map(({name, id}, index) => {
                    return(
                        <li key={id} className={test === name ? 'on' : null} onClick={() => handleFolderCheck(name)}>
                            <p>{name} <span>{modalFolderContents[index]?.data?.length}개 링크</span> </p>
                            <img src={`${process.env.PUBLIC_URL}/images/check.svg`} alt='체크 아이콘'/>
                        </li>
                    )
                })
            }
        </ul>
    )
}

function ShareModal({folderId}) {
    //배포한 사이트 필요 시 변경
    const resultUrl = `https://dongtestweb.netlify.app/shared/${folderId.id}`;
    // const resultUrl = `https://dongtestweb.netlify.app`;
    const handleCopyClipBoard = async () => {
        try {
            await navigator.clipboard.writeText(resultUrl);
            alert("클립보드에 링크가 복사되었어요.");
        } catch (error) {
            console.log(error);
        }
    };

    const handleShareToFacebook = () => {
        //혹시 문제가 있을시 밑에 면수 사용
        //const sharedLink = encodeURIComponent(linkUrl);
        window.open(`http://www.facebook.com/sharer/sharer.php?u=${resultUrl}`);
    };

    
    // 재랜더링시에 실행되게 해준다.
    useEffect(()=>{
        // init 해주기 전에 clean up 을 해준다.
        Kakao.cleanup();
        // 자신의 js 키를 넣어준다.
        Kakao.init('b5a39ddb506cf0df24b84c9baec27d99');
        // 잘 적용되면 true 를 뱉는다.
        // console.log(Kakao.isInitialized());
    },[]);
    // 카카오톡 공유
    const shareKakao = () =>{
        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: '9주차 위클리',
                description: '9주차 위클리 카카오 공유하기',
                imageUrl:
                'https://sprint.codeit.kr/static/images/sprint-admissions/og_img.png',
                link: {
                    mobileWebUrl: resultUrl,
                },
            },
            buttons: [
                {
                    title: '위클리 보러가기',
                    link: {
                    mobileWebUrl: resultUrl,
                    },
                },
                ],
            });
    }

    return(
        <ul className='shareContainer'>
            <li>
                <button onClick={() => {shareKakao()}}>
                    <img src={`${process.env.PUBLIC_URL}/images/kakaoShare.png`} alt='카카오톡으로 공유'/>
                    <span>카카오톡</span>
                </button>
            </li>
            <li>
                <button onClick={handleShareToFacebook}>
                    <img src={`${process.env.PUBLIC_URL}/images/facebookShare.png`} alt='페이스북으로 공유'/>
                    <span>페이스북</span>
                </button>
            </li>
            <li>
                <button onClick={handleCopyClipBoard}>
                    <img src={`${process.env.PUBLIC_URL}/images/linkShare.png`} alt='링크 복사'/>
                    <span>링크 복사</span>
                </button>
            </li>
        </ul>
    )
}

function Modal({name, setOpenModal, buttonColor, buttonName}) {
    const folderName = useRecoilValueLoadable(folderContents);
    const folderLink = useRecoilValue(clickFolder);
    const modalLink = useRecoilValue(contentsLink);
    const folderId = folderName?.contents?.data?.find(({name}) => name === folderLink);
    console.log(folderName);
    const handleCloseClick = () => {
        setOpenModal(false);
    }

    return(
        <div className="modalCon">
            <div className="modalBox">
                <h4>{name}</h4>
                <button className='deleteModal' type='button' onClick={handleCloseClick}><img src={`${process.env.PUBLIC_URL}/images/close.svg`} alt='닫기 버튼'/></button>
                {
                    (name === "폴더 삭제" || name === "링크 삭제" || name === "폴더에 추가" || name === '폴더 공유') ? 
                    name === '폴더 삭제' || name === '폴더 공유' ? <p className='modalText'>{folderLink}</p> : <p className='modalText'>{modalLink}</p>
                    : null
                }
                {
                    name === "폴더에 추가" ? <FolderName/> : null
                }
                <form>
                    {
                        name === "폴더 추가" || name === "폴더 이름 변경" ? 
                        name === "폴더 추가" ? <input type='text' placeholder='내용 입력'/> :
                        <input type='text' defaultValue={folderLink}/>
                        : null
                    }
                    {buttonName === '' ? null : <ModalButton type='button' background={buttonColor}>{buttonName}</ModalButton>}
                </form>
                {
                    name === "폴더 공유" ?
                    (
                        <ShareModal folderId={folderId}/>
                    )
                    : null
                }
            </div>
        </div>
    )
}

export default Modal;