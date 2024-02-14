import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';

import theme from 'styles/theme';
import GlobalStyle from 'styles/globalStyle';
import router from 'router.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
