import Head from 'next/head';
import InputForm from '@/components/signForm/inputForm/inputForm';
import Input from '@/components/input/Input';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Linkbrary</title>
        <meta property="og:title" content="Linkbrary" key="title" />
        <meta
          name="description"
          property="og:description"
          content="세상의 모든 정보를 쉽게 저장하고 관리해 보세요"
          key="description"
        />
        <meta
          property="og:image"
          content="https://visitbusan.net/uploadImgs/files/cntnts/20211130150754165_wufrotr"
          key="image"
        />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </Head>
      <div>
        <strong>로그인 form</strong>
        <InputForm />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <strong>회원가입 form</strong>
        <InputForm signType={true} />
      </div>
    </>
  );
}
