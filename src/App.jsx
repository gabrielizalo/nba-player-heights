import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { CssBaseline } from '@mui/material';

import Home from './pages/Home/Home';

const queryClient = new QueryClient();

const App = function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Home />
    </QueryClientProvider>
  );
};

export default App;
