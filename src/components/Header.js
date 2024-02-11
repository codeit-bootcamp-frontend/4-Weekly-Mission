import './Header.css';
import '../assets/common/common.css';

function Header() {
    return(
        <header>
            <div>
                <h1>
                    <a style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo.png)`}} href="/">Linkbrary</a>
                </h1>
                <a href="/signin">로그인</a>
            </div>
        </header>
    )
}

export default Header;