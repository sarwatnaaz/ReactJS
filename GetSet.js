let variable = {};

Object.defineProperty(variable, "firstName", {
    get: function(){
        return value;
    },
    set : function(firstName){
        document.getElementById("userInput").value = firstName;
        value = firstName;
    }
});

function changeValue(event){
    variable.firstName = event.target.value;
    document.getElementById("value").innerHTML = variable.firstName;

}
    setInterval(function(){
    variable.firstName = Math.floor(Math.random() * (100-1)+1);
    
    document.getElementById("value").innerHTML = "Value Generated: " + variable.firstName;
    
},10000);



