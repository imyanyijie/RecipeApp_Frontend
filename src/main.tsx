import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Error from "./component/Error.jsx";
import "./index.css";
import Recipes from "./component/Recipes.js";
import Items from "./component/Items.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Items />,
      },
      // {
      //   path: "/items",
      //   element: <Items />,
      // },
      {
        path: "/recipes",
        element: <Recipes />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
