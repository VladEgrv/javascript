/* Есть строка 
const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
Сделать функцию, которая генерирует рандомный пароль по его длине
Например, я вызываю функцию generatePassword(4)
Мне печатается пароль из рандомных значений длиной 4 */

const defaultCharset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"

function generatePassword(lengthOfPassword, charset = defaultCharset) {
    if (typeof charset !== "string" || charset.length <= 0) {
        throw new Error("Набор символов должен передаваться в строке, строка не может быть пустой");
    }
    if (!Number.isInteger(lengthOfPassword) || lengthOfPassword <= 0) {
        throw new Error("Длина пароля должна быть целым числом и не может быть отрицательной или нулевой");
    }
    let password = "";
    for (let i = 0; i < lengthOfPassword; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}
