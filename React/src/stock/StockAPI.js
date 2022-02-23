import React from "react";
import Axios from "axios";
import StockList from "../stock/StockList";

 export default class StockAPI extends React.Component {
    constructor() {
        super();
        this.state = {
            'price': []
        }
    }

    componentDidMount() {
        debugger;
        var dataPromise = Axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC");

        dataPromise.then((response) => {
            this.setState({
                price: response.data
            })
        })
    }

    render(){
        return(
            <div>     
                <StockList detail = {this.state.price.data}></StockList>                                    
            </div>
        )
    }
}
