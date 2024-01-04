import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './Components/App';
import { ProgressProvider } from './ContextGlobal/ContextGlobal';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProgressProvider>
      <App />
    </ProgressProvider>
  </React.StrictMode>
);
reportWebVitals();
