import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/style.scss";
import Layout from "./components/Layout";
import Welcome from "./pages/Welcome";
import Lodging from "./pages/Lodging";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="logement/:logementId" element={<Lodging />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
