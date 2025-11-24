import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home/> },
      { path: "about", element: <About/> },
      { path: "login", element: <Login/> },
      { path: "register", element: <Register/> },
      { path: "cart", element: <Cart/> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
