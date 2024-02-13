import logoImg from "../assets/logo.svg";
import profileImg from "../assets/profile.png";

function Gnb(props) {
    return (
        <div className="gnb">
            <div className="gnb_inner">
                <img src={logoImg} alt="logo" />
                <div className="gnb_profile">
                    <img src={profileImg} alt="" />
                    <p>{props.email}</p>
                </div>
            </div>
        </div>
    );
}

export default Gnb;
