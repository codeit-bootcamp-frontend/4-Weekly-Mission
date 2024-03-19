import ReactDOM from 'react-dom/client';

import AppRouter from './AppRouter';
import { AuthContextProvider } from './context/AuthContext';

import './styles/_reset.scss';
import './styles/_common.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  </>
);
