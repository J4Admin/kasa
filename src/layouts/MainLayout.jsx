import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import "../styles/App.scss";

function MainLayout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default MainLayout;
