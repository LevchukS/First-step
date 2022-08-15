//HW4


//task 1 your order
let text = prompt ("Enter your text","");
let elemText = text.split(" ")
let a = Array.from(elemText);
function compareNumbers(a, b) {
    a = a.match(/[1-9]/)
    b = b.match(/[1-9]/)
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
console.log(a.sort(compareNumbers))



//task 3
let a = Number(prompt("Enter first number" , ""));
let b = Number(prompt("Enter second number" , ""));
let oper = prompt("Enter operator" , "");

if 

function calc(a,b, oper) {
let result;
    switch (oper) {
      case "+":
        result = a + b;
          break;
      case "-":
       result = a - b;
           break;
       case "*":
       result = a * b;
           break
       case "/":
       result = a / b;  
    } 
    alert(result);
  }



//task 2
