import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Login } from "./auth/login.component";
import { ChooseCollection } from "./collection/choose-collection.component";
import { Root } from "./Root";
import { Home } from "./home/home.component";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "sign-in",
        element: <Login />,
      },
      {
        path: "collections",
        element: <ChooseCollection />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);
