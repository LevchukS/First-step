//task1

const arr = ["Ace of hearts", "Ace of diamonds", "Ace of clubs", "Ace of spades",
"King of hearts", "King of diamonds", "King of clubs", "King of spades",
"Queen of hearts", "Queen of diamonds", "Queen of clubs", "Queen of spades",
"Jack of hearts", "Jack of diamonds", "Jack of clubs", "Jack of spades",
"10 of hearts", "10 of diamonds", "10 of clubs", "10 of spades",
"9 of hearts", "9 of diamonds", "9 of clubs", "9 of spades",
"8 of hearts", "8 of diamonds", "8 of clubs", "8 of spades",
"7 of hearts", "7 of diamonds", "7 of clubs", "7 of spades",
"6 of hearts", "6 of diamonds", "6 of clubs", "6 of spades",
"5 of hearts", "5 of diamonds", "5 of clubs", "5 of spades",
"4 of hearts", "4 of diamonds", "4 of clubs", "4 of spades",
"3 of hearts", "3 of diamonds", "3 of clubs", "3 of spades",
"2 of hearts", "2 of diamonds", "2 of clubs", "2 of spades",
"Joker#1", "Joker#2"];
const shuffle = (arr) => {
    return arr.sort(() => Math.round(Math.random() * 100) - 46);
}

shuffle(arr);
alert(arr[0]);






//task3
let text = prompt("Enter text use uppercase and lowercase leters and numbers", "");

let elemText = text.split("");
let newElemText = [];
function changeElemText() {

  /*  for (i = 0; i < elemText.length; i++) {
        switch (elemText[i]) {
            case "[A-Z]":
                elemText[i] = "[a-z]";
                break;
            case "[a-z]":
                elemText[i] = "[A-Z]";
                break;
            case "[0-9]":
                elemText[i] = "_";
                break;
        };*/
        for(let i of elemText){
            if(!isNaN(parseInt(elemText(i)))) {
                newLineArr.push('_');
            }
            else if (i === i.toLowerCase()){
                newElemText.push(i.toUpperCase());                    
            }
            else if (i === i.toUpperCase()){
                newElemText.push(i.toLowerCase());                    
            } 
            else{
                newElemText.push(i);
    }
        }
    return alert(newElemText.join(""));
};
console.log(changeElemText());
