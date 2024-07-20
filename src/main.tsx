import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Error from "./component/util/Error.js";
import "./index.css";
import Recipes from "./component/recipe/Recipes.js";
import Items from "./component/Item/Items.js";
import { RecipeDetail } from "./component/recipe/RecipeDetail.js";
import path from "path";
import { RecipeForm } from "./component/recipe/RecipeForm.js";

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
        children: [
          {
            index: true,
            element: <Recipes />,
          },
          {
            path: "/recipes/:recipeID",
            element: <RecipeDetail />,
            errorElement: <Error />,
          },
          {
            path: "/recipes/create",
            element: <RecipeForm />,
            errorElement: <Error />,
          },
        ],
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
