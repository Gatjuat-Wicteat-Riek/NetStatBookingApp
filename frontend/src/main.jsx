import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import {SearchContextProvider} from "./components/context/SearchContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <SearchContextProvider>
        <Router>
          <App />
        </Router>
      </SearchContextProvider>
  </StrictMode>
);
