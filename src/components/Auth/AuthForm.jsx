import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import AuthErrorMsg from "./AuthErrorMsg";
import AuthLable from "./AuthLable";
import { useState } from "react";
import {API_PATH_SIGNIN, API_PATH_CHECK_EMAIL, API_PATH_SIGNUP} from "../../services/api-path";
import {REGEXP_PASSWORD} from "../../utils/regExp";
import FETCH_API from "../../services/fetch-data";
function AuthForm({option}){
    // 패스워드 인풋 타입 변경
    const [inputType, setInputType] = useState({
        password: "password",
        passwordConfirm: "password",
    })

    // 에러 메세지 
    const [errorMsg, setErrorMsg] = useState ({
        email: "",
        password: "",
        passwordConfirm: ""
    })

    // 인풋 값 처리
    const [userInput, setUserInput] = useState({
        email: "",
        password: "",
        passwordConfirm: ""
    });

    // 인풋 값 변경
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        });
    }

    // 폼 제출
    const handleSumbit = (e) => {
        e.preventDefault();
        option ? register() : login();   
    }

    // 패스워드 인풋 타입, 아이콘 변경
    const handlePasswordvisible = (name) => {
        inputType[name] === "password" ? 
        setInputType({...inputType, [name]: "text"}) : 
        setInputType({...inputType, [name]: "password"});
    }

    // 로그인 로직
    const login = async () => {
        try{
            const userInfo = {
                email: userInput.email,
                password: userInput.password,
            }
            const response = await FETCH_API.post(API_PATH_SIGNIN, userInfo);
            if(!response.ok){
                setErrorMsg({
                    ...errorMsg,
                    email: "이메일을 확인해 주세요!",
                    password: "비밀번호를 확인해 주세요!"
                })
                throw new Error("로그인 에러 발생");
            }
            const result = await response.json();
            setErrorMsg({
                email: "",
                password: ""
            })
            localStorage.setItem("accessToken", result.data.accessToken);
        }catch(error){
            console.error(error);
        }
        
    }

    // 패스워드 인풋 값 비교
    const passwordCompare = (password, passwordConfirm) => {
        if(password !== passwordConfirm){
            setErrorMsg({
                email: "",
                password: "두 비밀번호가 일치하지 않습니다!",
                passwordConfirm: "두 비밀번호가 일치하지 않습니다!"
            })
            throw new Error("비밀번호 일치 오류!");
        }
    }

    // 비밀번호 형식 확인
    const checkPasswordFormat = (password) =>{
        if(!REGEXP_PASSWORD.test(password)){
            setErrorMsg({
                email: "",
                password: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요!",
                passwordConfirm: ""
            })
            throw new Error("비밀번호 형식 오류!");
        }
    }

    // 회원가입 로직(이메일 중복 확인)
    const register = async () => {
        try{
            passwordCompare(userInput.password, userInput.passwordConfirm);
            checkPasswordFormat(userInput.password);
            const emailCheckResponse = await FETCH_API.post(API_PATH_CHECK_EMAIL, {email: userInput.email});
            if(!emailCheckResponse.ok){
                setErrorMsg({
                    email: "중복된 이메일 입니다!",
                    password: "",
                    passwordConfirm: ""
                })
                throw new Error("중복된 이메일!");
            }
            const userInfo = {
                email: userInput.email,
                password: userInput.password
            }
            const registerResponse = await FETCH_API.post(API_PATH_SIGNUP, userInfo);
            if(!registerResponse.ok){
                setErrorMsg({
                    ...errorMsg,
                    email: "이메일을 확인해 주세요!",
                    password: "비밀번호를 확인해 주세요!"
                })
                throw new Error("회원가입 실패");
            }
            const result = await registerResponse.json();
            localStorage.setItem("accessToken", result.data.accessToken);
            setErrorMsg({
                email: "",
                password: "",
                passwordConfirm: ""
            })
        }catch(err){
            console.error(err);
        }
    }

    return (
        <form className="sign__form" onSubmit={handleSumbit}>
            <div className="sign__input--area">
                <div className="sign__email">
                    <AuthLable htmlFor="input--email" text="이메일"/>
                    <input id="input--email" className="sign--input--email" type="email" name="email" required autoFocus
                    value={userInput.email} onChange={handleChange}/>
                    <AuthErrorMsg className="sign__email--error" errorMsg={errorMsg.email}/>
                </div>
                
                <div className="sign__password">
                    <AuthLable htmlFor="input--password" text="비밀번호"/>
                    <div className="signin__password--relative">
                        <input id="input--password" className="sign--input--password" type={inputType.password} name="password" required 
                        value={userInput.password} onChange={handleChange}/>
                        <FontAwesomeIcon className="eye" icon={inputType.password === "password" ? faEye : faEyeSlash} onClick={() => handlePasswordvisible("password")}/>
                        <AuthErrorMsg className="sign__password--error" errorMsg={errorMsg.password}/>
                    </div>
                </div>
                
                {option && <div className="sign__password--confirm">
                    <AuthLable htmlFor="input--password--confirm" text="비밀번호 확인"/>
                    <div className="signin__password--confirm--relative">
                        <input id="input--password--confirm" className="sign--input--password--confirm" type={inputType.passwordConfirm} name="passwordConfirm" required
                        value={userInput.passwordConfirm} onChange={handleChange}/>
                        <FontAwesomeIcon className="eye--confirm" icon={inputType.passwordConfirm === "password" ? faEye : faEyeSlash} onClick={() => handlePasswordvisible("passwordConfirm")} />
                        <AuthErrorMsg className="sign__password--confirm--error" errorMsg={errorMsg.passwordConfirm}/>
                    </div>
                </div>}
            </div>
            <button className="sign__button" type="submit">회원가입</button>
        </form>
    )
}

export default AuthForm;