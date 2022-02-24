import ReactDOM from "react-dom";
import App from "./stock/StockPrice";

var stockInfo = [
    "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC",
    "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI",
    "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC",
    "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI",
    "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC",
    "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI",
    "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC",
    "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI",
    "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC"
]

ReactDOM.render((
    <div>
        {stockInfo.map((stock) => {
            return <App apiUrl={stock}></App>
        })}
    </div>
), document.getElementById("root"))
