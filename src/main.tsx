import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n";
import { Provider } from "react-redux";
import { formStore } from "@/store";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={formStore}>
      <App />
    </Provider>
  </StrictMode>
);
