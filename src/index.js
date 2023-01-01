import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './asset/styles/globalStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './layouts/ErrorBoundary/index';
import App from './App';

import './index.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
      <BrowserRouter>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </BrowserRouter>,
  document.getElementById('root')
);

