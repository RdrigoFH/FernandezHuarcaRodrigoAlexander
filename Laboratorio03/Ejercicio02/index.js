const display = document.getElementById("display");
const history = document.getElementById("history")

function show(input){
   display.value += input;
}
function calculate(){
   history.textContent += display.value + "= " + eval(display.value);
   display.value = eval(display.value);
}