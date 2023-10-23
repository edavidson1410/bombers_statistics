import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from "./assets/theme";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

