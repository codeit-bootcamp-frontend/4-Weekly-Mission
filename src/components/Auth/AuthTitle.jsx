import { Link } from 'react-router-dom';
import LogoImg from '../../assets/big-logo.svg';

function AuthTitle({ text, action, actionText }) {
  return (
    <div className="sign__title">
      <Link to="/">
        <img className="sign__logo" src={LogoImg} alt="로고 이미지" />
      </Link>
      <p className="sign__text">
        {text}{' '}
        <Link className="sign__text--action" to={action}>
          {actionText}
        </Link>
      </p>
    </div>
  );
}

export default AuthTitle;
