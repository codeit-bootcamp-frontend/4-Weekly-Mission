import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import theme from 'styles/theme';
import GlobalStyle from 'styles/globalStyle';

import SharePage from 'pages/SharePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/share" element={<SharePage />}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
