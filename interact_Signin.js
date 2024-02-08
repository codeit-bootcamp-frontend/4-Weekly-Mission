import { chkLocal } from "/interact.js";

chkLocal();

//이메일 input에서 focus out 할 때, 값이 없을 경우 아래에 “이메일을 입력해 주세요.”
//이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우 아래에 “올바른 이메일 주소가 아닙니다.”

const inputel=document.querySelector('#emailinput'); //이메일 input 박스
const emailframe=document.querySelector('#emailframe'); //이메일 input 박스 frame
const errmsg=document.createElement('p'); //에러메시지
const emailtest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //이메일 테스팅 코드

function emaininput(e){
  if(e.target.value==''){
    errmsg.textContent='이메일을 입력해 주세요.';
    emailframe.append(errmsg);
    console.log(1);
    console.log(e.target.type);
  }
  else{
    if(!emailtest.test(e.target.value)){ //이메일 확인 테스트
      errmsg.textContent='올바른 이메일 주소가 아닙니다.';
      emailframe.append(errmsg);
    }
    else{
      if(errmsg.textContent){ //만약에 올바른 이메일 주소를 작성하였으면 에러메시지 삭제
        errmsg.remove();
      }
      //console.log(2);
    }
    
  }
}

inputel.addEventListener('focusout',emaininput);


//https://bootcamp-api.codeit.kr/docs 에 명세된 “/api/sign-in”으로 { “email”: “test@codeit.com”, “password”: “sprint101” } 
//POST 요청해서 성공 응답을 받으면 “/folder”로 이동합니다.

const btnlogin=document.querySelector('.login');
const inputel2=document.querySelector('#passwordinput');

async function clicklogin(){


  try{
    const response= await fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // JSON 형태로 데이터를 전송한다는 헤더 추가
      },
      body: JSON.stringify({
        "email": inputel.value,
        "password": inputel2.value
      })
    });


    if(response.status==200){
      const token= await response.json();
      localStorage.setItem('accessToken',token['data']['accessToken']);
      //console.log(token['data']['accessToken']);
      location.href='/folder.html';
    }

    else{
      throw new Error('로그인 시도에 실패하셨습니다!');
    }

  }

  catch(error){
    console.log(error);
  }
}

btnlogin.addEventListener('click',clicklogin);


//비밀번호 input에서 focus out 할 때, 값이 없을 경우 아래에 “비밀번호를 입력해 주세요.”

const inputpass=document.querySelector('#passwordinput'); //비밀번호 input 박스
const passwordframe=document.querySelector('#passwordframe'); //비밀번호 input 박스 frame
const errmsg2=document.createElement('p'); //에러메시지

function passwordinput(e){
  if(e.target.value==''){
    errmsg2.textContent='비밀번호를 입력해 주세요.';
    passwordframe.append(errmsg2);
  }
  else{
    errmsg2.remove(); // 비밀번호 값이 있는 경우 삭제해주기
  }
}

inputpass.addEventListener('focusout',passwordinput);

//로그인 버튼 클릭 또는 Enter키 입력으로 로그인 실행돼야 합니다.
//enter만 추가 이메일과 비밀번호 입력 후 enter를 누를 때 이벤트 처리하도록

function enterbtn(e){
  if(e.key=='Enter'){
    clicklogin();
  }
}

inputel.addEventListener('keydown',enterbtn);
inputel2.addEventListener('keydown',enterbtn);


//심화 요구사항 
//눈 모양 아이콘 클릭시 비밀번호의 문자열이 보이기도 하고, 가려지기도 합니다.
//눈 모양 아이콘 바꾸기
const icon=document.querySelector('.eyeicon');

function clickicon(){
  if(inputel2.value){ //비밀번호 값이 있는 경우에만

    if(inputel2.type=='password'){ //서로 바꿔주기
      inputel2.type='text';
      icon.src='./images/eye-on.PNG';
    }
    else{
      inputel2.type='password';
      icon.src='./images/eye-off.svg';
    }

  }
}

icon.addEventListener('click',clickicon);