import logoImg from '../../assets/logo.svg';

const Logo = () => {
  return (
    <div className="logo_area">
      <img className="logo_img" src={logoImg} alt="logo" />
    </div>
  );
};

export default Logo;
