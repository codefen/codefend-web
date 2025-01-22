import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import { QuotePage } from "./pages/quote";
import { AVALABLE_LOCALES } from "./data/i18n/i18n";
import { I18nProvider } from "./store/i18nProvider";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/en" replace />} />
          {AVALABLE_LOCALES.map((locale) => (
            <Route key={locale} path={locale}>
              <Route index element={<Home />} />
              <Route path="software" element={<Software />} />
              <Route path="industries" element={<Industries />} />
              <Route path="services" element={<Services />} />
              <Route path="compliance" element={<Compliance />} />
              <Route path="partners" element={<Partners />} />
              <Route path="about-us" element={<Friends />} />
              <Route path="calculator" element={<QuotePage />} />
              <Route
                path="*"
                element={<Navigate to={`/${locale}`} replace />}
              />
            </Route>
          ))}
          <Route path="*" element={<Navigate to="/en" replace />} />
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
