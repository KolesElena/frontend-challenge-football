import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { LogiN } from './pages/Login/loGin';
import { Router } from './router';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clubs from './pages/Clubs/Clubs';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
   
    <ChakraProvider>
      <Routes>
      <Route index element={<LogiN/>} />
        <Route path="/login" element={<LogiN/>} />
        <Route path="clubs" element={<Clubs />} />
      </Routes>
      </ChakraProvider>
     
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
