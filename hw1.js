//Сделать калькулятор - функция calculator с 3 параметрами(a,b,operator)
//operator +-/* - сделать действия на каждый оператор
//Сделать проверку что параметры только числа
//return каждого рез-та
//если b = 0, то выводить ошибку на ноль делить нельзя
//Ошибка: неизвестный оператор
import readline from "node:readline/promises";

function calculator(a, b, operator) {
    if (!(Number.isFinite(a) && Number.isFinite(b))) {
        throw new Error("Одно или оба значения не являются числом");
    }
    if (b === 0 && operator === "/") {
        throw new Error("На ноль делить нельзя"); 
    }
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:    
            throw new Error("Неизвестный оператор");
    }
}

async function getValue(message, allowZero = true) {
    while (true) {
        const value = await rl.question(message);
        if (value.trim() === "") {
            console.log("Значение не может быть пустым");
            continue;
        }
        const number = Number(value);
        if (!Number.isFinite(number)) {
            console.log("Введите валидное число");
            continue;
        }
        if (allowZero === false && number === 0) {
            console.log("Делить на ноль нельзя!");
            continue;
        }
        return number;
    }
}
    
async function getOperator(message) {
    while (true) {
        const value = await rl.question(message);
        if (value.trim() === "") {
            console.log("Значение не может быть пустым");
            continue;
        }
        const operator = value.trim();
        if (!["+", "-", "*", "/"].includes(operator)) {
            console.log("Введите валидный оператор (+, -, * или /)");
            continue;
        }
        return operator;
    }
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



const a = await getValue("Введите первое число: ");
const operator = await getOperator("Введите оператор: ");
const allowZero = operator !== "/";
const b = await getValue("Введите второе число: ", allowZero);
rl.close();
console.log(calculator (a, b, operator));
