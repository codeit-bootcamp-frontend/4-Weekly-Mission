import styled from "styled-components";

const KebabModalBox = styled.ul`
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
        cursor: pointer;
        width: 100%;
        background: #fff;
        border: none;
        padding: 7px 0px;
        font-size: 1.4rem;
        font-family: 'Pretendard';
    }
`

function KebabModal() {
    return(
        <KebabModalBox>
            <li>
                <button>삭제하기</button>
            </li>
            <li>
                <button>폴더에 추가</button>
            </li>
        </KebabModalBox> 
    )
}

export default KebabModal;