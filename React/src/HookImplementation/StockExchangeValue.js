import { useEffect, useState } from "react";
import Axios from "axios";

export default function StockExchangeValue() {

    const url = "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC";

    var[value,setValue] = useState(0);

        useEffect(() => {
            var dataPromise = Axios.get(url);
            dataPromise.then((response) => {
                setValue(response.data.data)
            })
        },[])
    

    return(
        <div>
            <h1>Current Price: {value.pricecurrent}</h1>
        </div>
    )
}
