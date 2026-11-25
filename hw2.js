
/* Сделать функцию getSeason которая принимает 2 параметра: month, temperature
сделать проверку чтобы функция принимала только числа (иначе вылетает ошибка 
- Неверный Тип данных)
сделать проверку если месяц введен НЕ в промежутке 1 и 12, то выводить сообщение 
Ошибка - такого месяца нету
Затем проверки следующие
если месяц 12 1 и 2 и темп <=5 - то это зима
если месяц между 3 и 5 и темп <20 - то это весна
если месяц между 6 и 8 и темп >20 - то это лето
если месяц между 9 и 11 и темп 5 - 20 - то осень
в противной случае - несоответствия сезона
 */


function getSeason(month, temperature) {
    if (!(Number.isFinite(month) && Number.isFinite(temperature))) {
        throw new Error("Неверный тип данных");
    }
    if (!(Number.isInteger(month) && 1 <= month && month <= 12)) {
        throw new Error("Такого месяца нет");
    }
    if ([1, 2, 12].includes(month) && temperature <= 5) {
        return "Зима";
    }
    if ([3, 4, 5].includes(month) && temperature < 20) {
        return "Весна";
    }
    if ([6, 7, 8].includes(month) && temperature > 20) {
        return "Лето";
    }
    if ([9, 10, 11].includes(month) && 5 <= temperature && temperature <= 20) {
        return "Осень";
    }
    return "Несоответствие сезона";
}

