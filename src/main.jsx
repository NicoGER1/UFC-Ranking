import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import RankingPage from "./pages/RankingPage.jsx";
import FighterPage from "./pages/FighterPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/RankingPage",
        element: <RankingPage />,
      },
      {
        path: "/FighterPage",
        element: <FighterPage />,
      },
      {
        path: "/ContactPage",
        element: <ContactPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
