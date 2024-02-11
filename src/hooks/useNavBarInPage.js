import { useLocation } from 'react-router-dom';
import routes from 'constants/routes';

function useNavBarInPage() {
  const location = useLocation();
  return [routes.home, routes.folder, routes.link].includes(location.pathname);
}

export default useNavBarInPage;
