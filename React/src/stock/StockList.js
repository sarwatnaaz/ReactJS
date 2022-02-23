export default function StockList(props) {
debugger;
    return (
      
      <div>
        <h1 style={{color:"green", textAlign:"center"}}>Price API:NLC</h1>
        <div  style={{width: "38rem", marginLeft: "375px" ,display:"inline-block"}}>
        <div className="alert alert-primary" role="alert">
          {props.detail && <h5>HN = {props.detail.HN}</h5>}
        </div>
        <div className="alert alert-secondary" role="alert">
          {props.detail && <h5>HP = {props.detail.HP}</h5>}
        </div>
        <div className="alert alert-success" role="alert">
          {props.detail && <h5>DISPID = {props.detail.DISPID}</h5>}
        </div>
        <div className="alert alert-danger" role="alert">
          {props.detail && <h5>SC_SUBSEC = {props.detail.SC_SUBSEC}</h5>}
        </div>
        <div className="alert alert-warning" role="alert">
        {props.detail && <h5>pricecurrent = {props.detail.pricecurrent}</h5>}
        </div>
        <div className="alert alert-info" role="alert">
        {props.detail && <h5>priceprevclose = {props.detail.priceprevclose}</h5>}
        </div>
        <div className="alert alert-light" role="alert">
        {props.detail && <h5>pricechange = {props.detail.pricechange}</h5>}
        </div>
        <div className="alert alert-dark" role="alert">
        {props.detail && <h5>pricepercentchange = {props.detail.pricepercentchange}</h5>}
        </div>
        <div className="alert alert-primary" role="alert">
          {props.detail && <h5>symbol = {props.detail.symbol}</h5>}
        </div>
        <div className="alert alert-secondary" role="alert">
          {props.detail && <h5>company = {props.detail.company}</h5>}
        </div>
        <div className="alert alert-success" role="alert">
          {props.detail && <h5>NSEID = {props.detail.NSEID}</h5>}
        </div>
        <div className="alert alert-danger" role="alert">
          {props.detail && <h5>lower_circuit_limit = {props.detail.lower_circuit_limit}</h5>}
        </div>
        <div className="alert alert-warning" role="alert">
        {props.detail && <h5>upper_circuit_limit = {props.detail.upper_circuit_limit}</h5>}
        </div>
        <div className="alert alert-info" role="alert">
        {props.detail && <h5>AvgVolQtyDel_20day = {props.detail.AvgVolQtyDel_20day}</h5>}
        </div>
        <div className="alert alert-light" role="alert">
        {props.detail && <h5>AvgVolQtyTraded_20day = {props.detail.AvgVolQtyTraded_20day}</h5>}
        </div>
        <div className="alert alert-dark" role="alert">
        {props.detail && <h5>MKTLOT = {props.detail.MKTLOT}</h5>}
        </div>
        </div>
      </div>
    )
}

