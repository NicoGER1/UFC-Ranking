import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import RankingPage from "./pages/RankingPage.jsx";
import FighterPage from "./pages/FighterPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import FighterDetails from "./components/FighterDetails";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/ranking",
        element: <RankingPage />,
      },
      {
        path: "/fighters",
        element: <FighterPage />,
      },
      {
        path: "/fighters/:id",
        element: <FighterDetails />,
        
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <h1>Page not found</h1>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
