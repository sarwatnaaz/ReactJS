export default function DataBindingComponent() {
    var userName = "Sarwat"
    var counter = 0;
    setInterval(() => {
        counter = counter + 1;
        console.log(counter);
    }, 1000)

    function getChangedValue(event){
        debugger;
        userName = event.target.value;
        
        setTimeout(() => {
            alert(userName);
        },5000)
    }

    return(
        <div>
            <h1>Counter Value is: {counter}</h1>
            Enter User Name: <input type="text" value={userName} onChange={getChangedValue} />
        </div>
    )
}