
import facebookIcon from '../img/facebook.png';
import twitterIcon from '../img/twitter.png';
import youtubeIcon from '../img/youtube.png';
import instaIcon from '../img/insta.png';
import styled from 'styled-components';

const Footer = styled.footer`
    padding-top : 6rem;
    
    .Footer-inner{
        height: 16rem;
        background-color: #111322;
        padding: 3.2rem 10% 6.4rem;
        display: flex;
        justify-content: space-between;
        color: #676767;
        font-size: 1.6rem;
        font-weight: 400;
    }

    .else-thing > a{
        color: inherit;
    }

    .else-thing > a:first-child{
        margin-right: 3rem;
    }
    .social-link{
        display: flex;
        gap: 1.2rem;
    }
    
    @media (max-width : 790px){
        .Footer-inner{
            flex-wrap: wrap;
        }
        .else-thing{
            order: 1;
            float: right;
            width: 50%;
        }
        .Footer-inner > nav{
            order: 2;
            float: left;
            width: 50%;
        }
        .Footer-inner > p{
            order: 3;
            margin-top: 6rem;
        }
        .social-link{
            justify-content: flex-end;
        }
    }
`;


function FooterBlock() {
    return (
        <Footer>
            <div className="Footer-inner">
                <p>©codeit - 2023</p>
                <div className='else-thing'>
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>FAQ</a>
                </div>
                <nav>
                    <ul className='social-link'>
                        <li>
                            <a href='https://www.facebook.com/'>
                                <img src={facebookIcon} alt='페이스북 아이콘' />
                            </a>
                        </li>
                        <li>
                            <a href='https://twitter.com/'>
                                <img src={twitterIcon} alt='트위터 아이콘' />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.youtube.com/'>
                                <img src={youtubeIcon} alt='유튜브 아이콘' />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/'>
                                <img src={instaIcon} alt='인스타그램 아이콘' />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </Footer>
    )
}

export default FooterBlock;