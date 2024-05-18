const display = document.getElementById("display");
const history = document.getElementById("history")

function show(input){
   display.value += input;
}
function calculate(){
   history.innerHTML+= display.value + "= " + eval(display.value) + '<br>';
   display.value = eval(display.value);
}