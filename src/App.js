import React from "react";
import { Outlet } from "react-router-dom";
import Discount from "./layout/Discount/Discount";
import Header from "./layout/Header/Header";
import Main from "./layout/Main/Main";
import Brands from "./layout/Brands/Brands";

function App() {
  return (
    <>
      <Discount />
      <Header />
      <Main />
      <Brands />

      <Outlet />
    </>
  );
}

export default App;
