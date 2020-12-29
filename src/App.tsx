import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import Page from './Components/Page';

const queryClient = new QueryClient()

const App: React.FC = () => {
  return  <QueryClientProvider client={queryClient}>
            <Page />
          </QueryClientProvider>;
}


export default App