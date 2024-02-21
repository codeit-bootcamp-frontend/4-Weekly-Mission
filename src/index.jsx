import ReactDOM from 'react-dom/client';

import AppRouter from './AppRouter';
import { AuthContextProvider } from './context/AuthContext';
import { GlobalStyle } from './styles/Globalstyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AuthContextProvider>
      <GlobalStyle />
      <AppRouter />
    </AuthContextProvider>
  </>
);
