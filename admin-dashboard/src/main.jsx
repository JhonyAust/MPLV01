import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "@/context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { adminStore, adminPersistor } from "./store/adminStore";
import "../public/css/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={adminStore}>
      <PersistGate loading={null} persistor={adminPersistor}>
        <BrowserRouter>
          <ThemeProvider>
            <MaterialTailwindControllerProvider>
              <App />
            </MaterialTailwindControllerProvider>
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
