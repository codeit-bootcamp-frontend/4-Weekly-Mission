import ReactDOM from 'react-dom/client';

import AppRouter from './AppRouter';
import { AuthContextProvider } from './context/AuthContext';

import './styles/reset.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  </>
);
