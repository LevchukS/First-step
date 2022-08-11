//HW3

//1 drowing line
let inputSymbol = "";
let oneInvalidLen = false;

do {
    inputSymbol = prompt("Enter any symbol", "");
    oneInvalidLen = inputSymbol != null && inputSymbol.length !== 1;
} while(oneInvalidLen) 

let inputWight = "";
let secInvalidLen = false;

do {
    inputWight = Number(prompt("Enter any positive integer number", ""));
    secInvalidLen = isNaN(inputSymbol) && inputWight != null && inputWight !== 1;
} while (secInvalidLen) 

let strSymbol = String(inputSymbol);
   let userLine = strSymbol.repeat(inputWight);
   alert(userLine);
  
    

    
//2 DNA


let inputDna;

do {
    inputDna = prompt("Enter DNA (use uppercase leters: A, C, G, T)", "");
} while (!inputDna);
const arrInputDna = Array.from(inputDna);

function showOutputDna() {
    for (i = 0; i < arrInputDna.length; i++) {
        switch (arrInputDna[i]) {
            case 'A':
                arrInputDna[i] = "T";
                break;
            case 'T':
                arrInputDna[i] = "A";
                break;
            case 'C':
                arrInputDna[i] = "G";
                break;
            case 'G':
                arrInputDna[i] = "C";
                break;
        };
    };
    return alert(arrInputDna.join(""));
};
showOutputDna();





let priceGold = "";
let priceIncorrect = false;

do {
    goldPrice = prompt("Enter 3 prices separate by comma").split(",").sort(function (a, b) {
        return b - a;
    }
        priceIncorrect = priceGold != null && priceGold !== 1;
}
 while(priceIncorrect) 

let boxWeight  = "";
let boxIncorrect = false;

do {
    boxWeight = prompt("Enter 3 prices separate by comma").split(",").sort(function (a, b)) {
        return b - a;
    }
        boxIncorrect =  boxWeight != null && boxWeight !== 1;
}
  while(boxIncorrect)

if (goldPrices[0] > 100 || containersWeight[0] > 100) {
    alert("Digits should be less than 100")
} else {
    let totalSum = 0;
    for (let i in containersWeight) {
        totalSum += containersWeight[i] * goldPrices[i]
    }
    alert(totalSum)
}
