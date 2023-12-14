import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

import './styles/global.scss';

import reportWebVitals from './reportWebVitals';
import Software from './pages/software';
import Industries from './pages/industries';
import Services from './pages/services';
import Compliance from './pages/compliance';
import Partners from './pages/partners';

export default function App() {
  return (
    <BrowserRouter>
      
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="software" element={<Software />} />
            <Route path="industries" element={<Industries />} />
            <Route path="services" element={<Services />} />
            <Route path="compliance" element={<Compliance />} />
            <Route path="partners" element={<Partners />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
