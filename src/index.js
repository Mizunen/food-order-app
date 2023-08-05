import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { CartContextProvider } from "./components/context/show-cart-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </HashRouter>
);
