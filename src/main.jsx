import './index.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import routes from './Routes/Routes';
import AuthProvider from './providers/AuthProvider';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={routes} /></AuthProvider>
  </React.StrictMode>
);
