import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Login } from "./auth/login.component";
import { ChooseCollection } from "./collection/collections.component";
import { Root } from "./Root";
import { Home } from "./home/home.component";
import { CollectionDetails } from "./collection/collection-details.component";
import { RemarkDetails } from "./remarks/remark-details.component";

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
      {
        path: "collections/:collectionId",
        element: <CollectionDetails />,
      },
      {
        path: "remarks/:remarkId",
        element: <RemarkDetails />,
      },
    ],
  },
]);
