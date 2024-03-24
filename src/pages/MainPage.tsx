import Button from 'components/common/button/Button';
import MainLayout from 'components/template/MainLayout';
import routes from 'constants/routes';
import { useNavigate } from 'react-router-dom';

/**
 * 임시메인페이지
 * todo 메인페이지 만들기
 */

function MainPage() {
  const navigate = useNavigate();

  const goToSharedPage = () => {
    navigate(routes.shared);
  };

  const goToFoldersPage = () => {
    navigate(routes.folder);
  };

  return (
    <MainLayout>
      <div style={{ height: '100vh' }}>
        <div>MainPage comming soon</div>
        <Button style={{ margin: '2rem 1rem 0 0 ' }} onClick={goToSharedPage}>
          공유페이지 바로가기
        </Button>
        <Button onClick={goToFoldersPage}>폴더페이지 바로가기</Button>
      </div>
    </MainLayout>
  );
}

export default MainPage;
