let rerun

// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    
    switch (operation) {
        case '+':
            return x+y;            
            // break;
        
        case '-':
            return x-y;
        
        case '*':
            return x*y;

        case '/':
            return x/y;
    
        default:
            alert("Something went wrong during calculation. We apologize for the inconvenience and for misrepresenting the capabilities of this application.")
            break;
    }    
}

// COLLECT FIRST NUMBER FROM USER
do {
    rerun = false
    firstNum = parseFloat(prompt("Enter your first number:"))
    if (isNaN(firstNum)) {
        alert("You must enter a number.")
        rerun=true
    }
} while (rerun);

// COLLECT SECOND NUMBER FROM USER
do {
    rerun = false
    secondNum = parseFloat(prompt("Enter your second number:"))
    if (isNaN(secondNum)) {
        alert("You must enter a number.")
        rerun=true
    }
} while (rerun);

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
do {
    let rerun = false
    operatorChoice = prompt("Enter your preferred operator (choose from +, -, *, /):")
    if (operatorChoice!='\+'&&operatorChoice!='\-'&&operatorChoice!='\*'&&operatorChoice!='\/') {
        alert("You must enter one of the allowed operators.")
        rerun=true
    }
} while (rerun);

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
alert(calculate(firstNum,secondNum,operatorChoice))