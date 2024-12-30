import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
<<<<<<< HEAD
    <App />
  </StrictMode>
);
=======
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
>>>>>>> 67d955ca81080bb6a770bf6ecd89abc913c8c6f9
