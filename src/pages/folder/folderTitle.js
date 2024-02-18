import { useRecoilValue } from "recoil";
import { clickFolder } from "../../store/store";
import './folderTitle.css';

function FolderTitle() {
    const clickedLink = useRecoilValue(clickFolder);
    return(
        <div className="folderTitleContainer">
            <h2>{clickedLink}</h2>
            {
            clickedLink === '전체' ? null : 
            <ul>
                <li>
                    <button>
                        <img src={`${process.env.PUBLIC_URL}/images/share.svg`} alt="공유"/>공유
                    </button>
                </li>
                <li>
                    <button>
                        <img src={`${process.env.PUBLIC_URL}/images/pen.svg`} alt="이름 변경"/>이름 변경
                    </button>
                </li>
                <li>
                    <button>
                        <img src={`${process.env.PUBLIC_URL}/images/delete.svg`} alt="삭제"/>삭제
                    </button>
                </li>
            </ul>
            }
        </div>
    )
}

export default FolderTitle;