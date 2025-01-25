import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "aos/dist/aos.css";
import App from "./App.jsx";
import {SearchContextProvider} from "./components/context/SearchContext.jsx";
import {AuthContextProvider} from "./components/context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <AuthContextProvider>
          <SearchContextProvider>
              <Router>
                  <App />
              </Router>
          </SearchContextProvider>
      </AuthContextProvider>

  </StrictMode>
);
