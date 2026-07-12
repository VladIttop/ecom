import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Discount from "./layout/Discount/Discount";
import ErrorPage from "./layout/Error-Page/ErrorPage";
import Header from "./layout/Header/Header";
import { Login } from "./pages/login/Login";
import { AuthProvider } from "./contexts/authContext";
import { SignUp } from "./pages/signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <h1>About Page</h1>,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);
