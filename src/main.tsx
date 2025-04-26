import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "@/app/App.tsx";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

if (import.meta.env.MODE === "development") {
  const { worker } = await import("./__mocks__/browser");
  worker.start();
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
