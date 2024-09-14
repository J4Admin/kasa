import React from "react";
import { createHashRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import HousingPage from "./pages/HousingPage.jsx";

const router = createHashRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "*", element: <ErrorPage /> },
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "housingPage/:id", element: <HousingPage /> },
    ],
  },
]);

export default router;
