import './Header.css';
import styled from 'styled-components';

const CommonHeader = styled.header`
    position: ${({fixed}) => fixed ? 'fixed' : 'static'};
`
function HeaderPrpfile({contents, userImg}) {
    return(
        <>
            {
            contents ? 
            <a className='profileText' href='https://www.naver.com/'>
                <img src={contents[userImg]} alt='프로필 아이콘'/>{contents.email}
            </a> 
            : 
            <a className='login' href="/signin">로그인</a>
            }
        </>
    )
}

function Header({fixed, userImg, contents}) {
    return(
        <CommonHeader fixed={fixed ? 1 : 0}>
            <div>
                <h1>
                    <a style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo.png)`}} href="/">Linkbrary</a>
                </h1>
                <HeaderPrpfile contents={contents} userImg={userImg}/>
            </div>
        </CommonHeader>
    )
}

export default Header;