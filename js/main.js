// document.write("JS saying HI");
// console.log("JS saying HI");
// console.info("JS saying HI");
// console.error("JS saying HI");
// console.warn("JS saying HI");
const num = 7;
//num = 5;
console.log("Переменная: " + num);

var number;
number = false;


var num_1 = 5.7;
var num_2 = 10.49;



console.log("Resault: " + (num_1 - num_2));

var num_3 = 5;
num_3++;

console.log("Resault: " + num_3);

var str_1 = Number ("12");
var str_2 = Number ("2");
console.log("Resault: " + (str_1 + str_2));

console.log("Math:" + Math.PI);
console.log("Math:" + Math.max(4, 698, 4, 3, 0, 5, 7)) 


var number = 15;
var isHasHouse = true;

if(number == 15 && isHasHouse) {
    console.log("OK");
} else if(number < 10) {
    console.log("OK!");

}
else if(number == 7) {
    console.log("7!");

}
else if(number > 15) {
    console.log(">=15!");

}



var stroka = "word23";

switch(stroka) {
    case "4": console.log("Переменная со значением 4");
    break;
    case "45":
        console.log("Переменная со значением 45");
        break;
        case "word":
        console.log("Переменная со значением word");
        break;
        default:
            console.log("Default");
            break;

}