export default function ConceptOfInterpolation(){

    var name = "India";

    function getTime(){
        return new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds();
    }

    return (
    //<h1>The sum is { 1 + 1 } </h1>
    <div>
        <h1>The Current Time of { name } is: </h1>
        <h2>{ getTime() }</h2>

        {/* <h2>{ new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds() }</h2> */}
    </div>
    )
}