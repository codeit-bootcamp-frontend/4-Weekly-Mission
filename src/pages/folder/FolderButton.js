import { useRecoilState, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { clickFolder, folderContents, folderLinkContents} from "../../store/store";
import styled from "styled-components";
import './FolderButton.css';
import { folderLinksData } from "../../apis/apiFolder";

const AddButton = styled.button`
    cursor: pointer;
    background-color: #fff;
    border: none;
    color: #6D6AFE;
    font-family: Pretendard;
    font-size: 1.6rem;
    padding-right: 20px; 
    background-image: url(${process.env.PUBLIC_URL}/images/add.svg);
    background-position: right center;
    background-repeat: no-repeat;

    @media screen and (max-width: 768px) {
        position: fixed;
        bottom: 101px; left: 50%; transform: translateX(-50%);
        padding: 8px 44px 8px 24px;
        background-color: #6D6AFE;
        color: #fff;
        border-radius: 20px;
        background-image: url(${process.env.PUBLIC_URL}/images/addMobile.svg);
        background-position: right 24px center;
    }
`

function FolderButton({setName, setOpenModal, setButtonColor, setButtonName, modalName}) {
    const {contents} = useRecoilValueLoadable(folderContents);
    const [clickedLink, setClickedLink] = useRecoilState(clickFolder);
    const setLinkContents = useSetRecoilState(folderLinkContents);

    const handleLinkClick = (name, id) => {
        setClickedLink(name);
        folderLinksData(id)
            .then((data) => setLinkContents(data))
            .catch((error) => {console.error(error)});
    };
    function handleModalClick() {
        setOpenModal(true);
        setName(modalName.add.name);
        setButtonColor(modalName.add.buttonColor);
        setButtonName(modalName.add.buttonName);
    };
    return(
        <div className="buttonContainer">
            <ul className="buttonBox">
                <li>
                    <button
                        className={clickedLink === '전체' ? 'on' : ''}
                        onClick={() => handleLinkClick('전체', 'all')}
                    >
                    전체
                    </button>
                </li>
                {contents?.data?.map(({name, id}) => {
                    return(
                        <li key={id}>
                            <button
                            className={clickedLink === name ? 'on' : ''}
                            onClick={() => handleLinkClick(name, id)}
                            >
                                {name}
                            </button>
                        </li>
                    )
                })}
            </ul>
            <AddButton onClick={handleModalClick}>
                폴더 추가
            </AddButton>
        </div>
    )
}

export default FolderButton;