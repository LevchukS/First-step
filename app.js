//HW3

//1 drowing line
let inputSymbol;

do {
    inputSymbol = prompt("Enter any symbol", "");
} while (!inputSymbol);

let inputWight;

do {
    inputWight = Number(prompt("Enter any positive integer number", ""));
} while ((!inputWight) && isNaN(inputSymbol));
if (inputWight<0){
    alert('Error, please follow instruction');
}
else String(inputSymbol);
   let A = inputSymbol.repeat(inputWight);
   alert(A);
  
    

    
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
