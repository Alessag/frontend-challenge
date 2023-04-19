import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import "./index.css";
function ClubComponent() {
  return (
    <div>
      <h1>Club Component</h1>
    </div>
  );
}
function TrackingComponent() {
  return (
    <div>
      <h1>Tracking Component</h1>
    </div>
  );
}
function StoresComponent() {
  return (
    <div>
      <h1>Stores Component</h1>
    </div>
  );
}
function LoansComponent() {
  return (
    <div>
      <h1>Loans Component</h1>
    </div>
  );
}
function MotorcycleComponent() {
  return (
    <div>
      <h1>Motorcycle Component</h1>
    </div>
  );
}
function PhonesComponent() {
  return (
    <div>
      <h1>Phones Component</h1>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/phones",
    element: <PhonesComponent />,
  },
  {
    path: "/motorcycle",
    element: <MotorcycleComponent />,
  },
  {
    path: "/loans",
    element: <LoansComponent />,
  },
  {
    path: "/stores",
    element: <StoresComponent />,
  },
  {
    path: "/tracking",
    element: <TrackingComponent />,
  },
  {
    path: "/club",
    element: <ClubComponent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
