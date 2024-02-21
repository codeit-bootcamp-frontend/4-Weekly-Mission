import SocialLogin from '../components/auth/SocialLogin';
import AuthTitle from '../components/auth/AuthTitle';
import AuthForm from '../components/auth/AuthForm';
// import '../styles/sign.css';

function Register() {
  return (
    <div className='wrap'>
      <main className='sign'>
        <div className='sign__box'>
          <AuthTitle text='이미 회원이신가요?' action='/signin' actionText='로그인 하기' />
          <AuthForm option={true} />
        </div>
        <SocialLogin />
      </main>
    </div>
  );
}

export default Register;
