import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/home";

import "./styles/global.scss";

import reportWebVitals from "./reportWebVitals";
import Software from "./pages/software";
import Industries from "./pages/industries";
import Services from "./pages/services";
import Compliance from "./pages/compliance";
import Partners from "./pages/partners";
import Friends from "./pages/friends";
import Enciclopedia from "./pages/enciclopedia";
import Promo from "./pages/promo";
import NewHome from "./pages/newHome/newHome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="software" element={<Software />} />
          <Route path="industries" element={<Industries />} />
          <Route path="services" element={<Services />} />
          <Route path="compliance" element={<Compliance />} />
          <Route path="partners" element={<Partners />} />
          <Route path="about-us" element={<Friends />} />
          <Route path="enciclopedia" element={<Enciclopedia />} />
          <Route path="promo" element={<Promo />} />
          <Route path="newhome" element={<NewHome />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
