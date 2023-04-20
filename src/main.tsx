import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { Home } from "./routes/Home";
import { Root } from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/phones",
        element: <Home />,
      },
      {
        path: "/motorcycle",
        element: <Home />,
      },
      {
        path: "/loans",
        element: <Home />,
      },
      {
        path: "/stores",
        element: <Home />,
      },
      {
        path: "/tracking",
        element: <Home />,
      },
      {
        path: "/club",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
