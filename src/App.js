import React from "react";
import { Outlet } from "react-router-dom";
import Discount from "./layout/Discount/Discount";
import Header from "./layout/Header/Header";
import Main from "./layout/Main/Main";
import Brands from "./layout/Brands/Brands";
import Arrivals from "./layout/Arrivals/Arrivals";
function App() {
  return (
    <>
      <Discount />
      <Header />
      <Main />
      <Brands />
      <Arrivals />

      <Outlet />
    </>
  );
}

export default App;
