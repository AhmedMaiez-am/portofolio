import ReactDOM from "react-dom";
import "./style.css";
import App from "./app";

ReactDOM.render(<App />, document.getElementById("root"));

// Optional privacy-friendly analytics (GoatCounter). Set REACT_APP_GOATCOUNTER_CODE in .env to enable.
const gc = process.env.REACT_APP_GOATCOUNTER_CODE;
if (gc) {
  const sc = document.createElement("script");
  sc.async = true;
  sc.dataset.goatcounter = `https://${gc}.goatcounter.com/count`;
  sc.src = "https://gc.zgo.at/count.js";
  document.head.appendChild(sc);
}
