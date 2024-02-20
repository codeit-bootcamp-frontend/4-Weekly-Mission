const tempImage = "https://ctfassets.imgix.net/vh7r69kgcki3/1yD4Tmm83DWGhp6UzGId5z/baa2c10600153343d3b72c24762ba571/Web_150DPI-20201217_WeWork_Km_5_Av_Las_Palmas_-_Medellin_007.jpg"
const shareKakaoLink = (modalAction) => {
  try{
    if(window.Kakao){
      window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);

      // 중복 init 방지
      if (!window.Kakao.isInitialized()) {
        window.KaKao.init(process.env.REACT_APP_KAKAO_JS_KEY);
      }

      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: "Linkbrary 폴더 공유하기",
          description: modalAction.subTitle,
          imageUrl: tempImage,
          link: {
            mobileWebUrl: modalAction.url,
            webUrl: modalAction.url,
          },
        }
      });
    }
  }catch(err){
    console.error("카카오톡 링크 공유 에러 발생!");
  }
  
  

  
}

export default shareKakaoLink;

