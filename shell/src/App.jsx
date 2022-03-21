import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
const HomeContent = React.lazy(() => import("home/HomeContent"));
const TabMenu = React.lazy(() => import("tabmenu/TabMenu"));
const App = () => (
  <>
    <CssBaseline />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback="Loading...">
              <HomeContent />
            </React.Suspense>
          }
        />
        <Route
          path="/home"
          element={
            <React.Suspense fallback="Loading...">
              <HomeContent />
            </React.Suspense>
          }
        />
        <Route
          path="/tabmenu/*"
          element={
            <React.Suspense fallback="Loading...">
              <TabMenu />
            </React.Suspense>
          }
        />
        {/* <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
