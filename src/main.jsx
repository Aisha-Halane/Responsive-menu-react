import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";

import "./index.css";

const root = document.getElementById("root");
createRoot(root).render(
    <Header/>
)