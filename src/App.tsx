import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import Page from './Page/Page';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const App: React.FC = () => {
  return  <QueryClientProvider client={queryClient}>
            <Page />
          </QueryClientProvider>;
}


export default App