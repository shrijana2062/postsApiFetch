import React from "react";
import ReactDOM from "react-dom/client";
import Posts from "./Posts";
import "./index.css"; 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Posts />
  </React.StrictMode>
);