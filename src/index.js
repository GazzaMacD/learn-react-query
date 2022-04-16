import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GettingStarted from './pages/getting-started';
import Home from './pages/home';
import Issues from './pages/issues';
import Issue from './pages/issue';
import AddIssue from './pages/add-issue';
import { worker } from '@uidotdev/react-query-api';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));

new Promise((res) => setTimeout(res, 100))
  .then(() =>
    worker.start({
      quiet: true,
      onUnhandledRequest: 'bypass',
    }),
  )
  .then(() => {
    root.render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="/getting-started" element={<GettingStarted />} />
                <Route path="/issues" element={<Issues />} />
                <Route path="/add" element={<AddIssue />} />
                <Route path="/issue/:number" element={<Issue />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </React.StrictMode>,
    );
  });
