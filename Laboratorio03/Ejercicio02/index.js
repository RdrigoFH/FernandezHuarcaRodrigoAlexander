const display = document.getElementById("display");

function show(input){
   display.value += input;
}
function calculate(){
   display.value = eval(display.value);
}