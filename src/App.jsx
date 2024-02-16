import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';

import theme from 'styles/theme';
import GlobalStyle from 'styles/globalStyle';
import router from 'router.jsx';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1 * 60 * 1000,
    },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.log(error, query);
    },
  }),
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
