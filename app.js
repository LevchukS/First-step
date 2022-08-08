HW2


//Help uncle, improve his buisness
const numLength = Number(prompt("Введіть довжину",""));
const numWeight = Number(prompt("Введіть ширину",""));
const numHeight = Number(prompt("Введіть висоту",""));

const paintCan = 16;
if (isNaN(numLength && numWeight && numHeight) 
&& 0 <= numLength && numWeight && numHeight <= 1000) 
    {alert("помилка! Введено не коректне число");
}
else { let room = (numLength + numWeight) * 2 * numHeight;
    const needCan = (room / paintCan);

    alert(`Необхідно ${needCan}л фарби`);
}


//Celsius vs. Fahrenheit
const celsTemp = Number(prompt('Введіть температуру в градусах Цельсія',''));

if (isNaN(celsTemp))
    {alert("помилка! Введено не коректне число");
}
else {const fahrTemp = celsTemp*1.8+32;
    alert(`Температуру в градусах ${fahrTemp}`);
}



   //Lucky or not?
 const n = prompt("Введіть номер квитка","");
if (n.length !== 6)
   {alert("Помилка! Занадто мало символів");
   }
   num = Number(n);

if (isNaN(num))
 {
    alert("Помилка! Введено не коректне число");
  } else if (0 <= num <= 999999);
const onePart = num[0] + num[1] + num[2];
const secPart = num[3] + num[4] + num[5];
if (onePart === secPart) {
    alert(`Ваш квиток щасливий`);
  } else (onePart !== secPart);{
  alert(`Ваш квиток, звичайний`);
}


