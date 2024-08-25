const display = document.getElementById("display");

let result = "";

function appendToDisplay(input) {
    if(result) {
        result = "";
        display.value ="";
    }
    display.value += input;

}

function clearDisplay() {
    display.value ="";

}

function calculate() {
    try {
        result = eval(display.value);
        display.value = result;
        
    } catch (error) {
        result = "Error";
        display.value= result;
        
    }

}