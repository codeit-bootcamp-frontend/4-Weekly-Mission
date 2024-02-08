import './Footer.css'
import facebookIcon from '../../img/facebook.png'
import twitterIcon from '../../img/twitter.png'
import youtubeIcon from '../../img/youtube.png'
import instaIcon from '../../img/insta.png'


function Footer() {
    return (
        <footer id="Footer">
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
                                <img src={facebookIcon} alt='페이스북 아이콘'/>
                            </a>
                        </li>
                        <li>
                            <a href='https://twitter.com/'>
                                <img src={twitterIcon} alt='트위터 아이콘'/>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.youtube.com/'>
                                <img src={youtubeIcon} alt='유튜브 아이콘'/>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/'>
                                <img src={instaIcon} alt='인스타그램 아이콘'/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;