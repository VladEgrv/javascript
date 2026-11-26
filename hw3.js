/* Сделать функцию addNumber(number) - она добавляет в массив число и пишет сообщение "Число " + number + " добавлено в массив." (Сделать через интерполяцию обязательно)
Сделать функцию analyzeNumbers() - анализирует сколько чисел в массиве (который у нас создан в предыдущем пункте) положительных, отрицательных и 0. */

const arrayOfNumbers = [];

function addNumber(number, array) {
    if (!Array.isArray(array)) {
        throw new Error("Объект должен являться массивом");
    }
    if (!Number.isFinite(number)) {
        throw new Error("Значение должно быть числом");
    }
    array.push(number);
    console.log(`Число ${number} добавлено в массив`);
}

function analyzeNumbers(array) {
    if (!Array.isArray(array) || !array.every(Number.isFinite)) {
        throw new Error("Переданный объект не является массивом или состоит не только из чисел");
    }

    let counterPositive = 0;
    let counterNegative = 0;
    let counterZeros = 0;

    for (const number of array) {
        if (number < 0) {
            counterNegative++;
        }
        else if (number === 0) {
            counterZeros++;
        }
        else {
            counterPositive++;
        }

    }
    console.log(`Массив имеет ${counterPositive} положительных чисел, ${counterNegative} отрицательных чисел и ${counterZeros} нулей`);
}


addNumber(10, arrayOfNumbers);
addNumber(-5, arrayOfNumbers);
addNumber(0, arrayOfNumbers);
addNumber(25, arrayOfNumbers);

analyzeNumbers(arrayOfNumbers);