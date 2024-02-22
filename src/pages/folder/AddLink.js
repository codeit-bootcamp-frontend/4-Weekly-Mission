import './AddLink.css';
import styled from 'styled-components';

const AddLinkInput = styled.input`
    width: 100%;
    height: 69px;
    padding: 16px 120px 16px 52px;
    border-radius: 15px;
    outline: none;
    border: 1px solid #6D6AFE;
    font-size: 1.6rem;
    &::placeholder {
        color: #9FA6B2;
        font-family: Pretendard;
    }
    @media screen and (max-width: 768px) {
        height: 53px;
        padding: 8px 100px 8px 34px;
        font-size: 1.4rem;
    }
` 

function AddLink() {
    return(
        <article>
            <form className='addLinkForm'>
                <label htmlFor='addLink'>
                    <img src={`${process.env.PUBLIC_URL}/images/link.svg`} alt='링크추가'/>
                </label>
                <AddLinkInput id='addLink' type='text' placeholder='링크를 추가해 보세요.'/>
                <button type='button'>추가하기</button>
            </form>
        </article>
    )
}

export default AddLink;