/* Сделать игру камень ножницы бумага 
ф-ция принимает выбор игрока
если у тебя и у компа одинаковые значение - пишет Ничья
если ты выиграл - пишет ты выиграл
если проиграл - ты проиграл
компьютер загадывает рандомное значение - камень или ножницы или бумага
rock - paper - scissors
 */
import readline from "node:readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const rules = {"rock" : "scissors", "scissors" : "paper", "paper" : "rock"};
const choices = Object.keys(rules);

async function getPlayerChoice() {  
    while (true) {        
        const requestChoice = Number(await rl.question("Сделайте выбор:\n 1) Камень\n 2) Ножницы\n 3) Бумага \n (Введи цифру)"));
        if (![1, 2, 3].includes(requestChoice)){
            console.log("Некорректный ввод, введите число от 1 до 3");
            continue;
        }
        
        rl.close();
        const playerChoice = choices[requestChoice - 1];
        return playerChoice;
    }
}

function gameRockPaperScissors(playerChoice) {
    if (!choices.includes(playerChoice)) {
        throw new Error("Некорректное значение");
    }
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    if (playerChoice === computerChoice) {
        console.log(`Выбор компьютера: ${computerChoice}, ничья`);
    } else if (rules[playerChoice] === computerChoice) {
        console.log(`Выбор компьютера: ${computerChoice}, ты выиграл`);
    } else {
        console.log(`Выбор компьютера: ${computerChoice}, ты проиграл`);
    }
}

const playerChoice = await getPlayerChoice();
gameRockPaperScissors(playerChoice);