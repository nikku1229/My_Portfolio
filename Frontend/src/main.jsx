import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Lenis from "@studio-freight/lenis";
import App from "./App.jsx";
import { AnchorProvider } from "./context/AnchorContext.jsx";
import { ToastProvider } from "./context/ToastContext.jsx";
import { LoaderProvider } from "./context/LoaderContext.jsx";
import "./index.css";

const lenis = new Lenis({
  duration: 2,
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

createRoot(document.getElementById("root")).render(
  <ToastProvider>
    <LoaderProvider>
      <AnchorProvider>
        <App />
      </AnchorProvider>
    </LoaderProvider>
  </ToastProvider>,
);
