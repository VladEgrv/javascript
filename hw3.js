/* Сделать функцию addNumber(number) - она добавляет в массив число и пишет сообщение "Число " + number + " добавлено в массив." (Сделать через интерполяцию обязательно)
Сделать функцию analyzeNumbers() - анализирует сколько чисел в массиве (который у нас создан в предыдущем пункте) положительных, отрицательных и 0. 


сделать функцию calculateAverage которая считает среднее значение 
из нашего массива и выводит значение на консоль до 2 знаков после запятой
*/

const arrayOfNumbers = [];

function addNumber(number, array = arrayOfNumbers) {
    if (!Array.isArray(array)) {
        throw new Error("Объект должен являться массивом");
    }
    if (!Number.isFinite(number)) {
        throw new Error("Значение должно быть числом");
    }
    array.push(number);
    console.log(`Число ${number} добавлено в массив`);
}

function analyzeNumbers(array = arrayOfNumbers) {
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

function calculateAverage(array = arrayOfNumbers) {
    if (!Array.isArray(array) || !array.every(Number.isFinite) || array.length === 0) {
        throw new Error("Переданный объект должен быть не пустым массивом и состоять только из чисел");
    }
    let sumOfNumbers = 0;
    for (const number of array) {
        sumOfNumbers += number;
    }
    const averageOfNumbers = sumOfNumbers / array.length;
    console.log(averageOfNumbers.toFixed(2));
    return averageOfNumbers;
}