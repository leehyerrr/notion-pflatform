import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/index.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import SignIn from "./pages/sign-in.tsx";
import SignUp from "./pages/sign-up.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import RootLayout from "./pages/layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<App />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-in" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
