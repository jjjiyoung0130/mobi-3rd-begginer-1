import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import Router from "./libs/react-router-dom/router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Router} />);

reportWebVitals();
