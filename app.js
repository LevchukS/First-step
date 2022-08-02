const rad = prompt("Enter Radius","");
let circleAria =  Math.pow(rad, 2) * Math.PI;
alert(`Aria of a circle ${circleAria}`);

const actualage = prompt("Enter your age","");
let age =  65 - actualage;
alert(`to retirement left ${age}`);

const num = prompt("Enter Number","");
let numRevers = num.split("").reverse().join("");
alert(`Number revers ${numRevers}`);