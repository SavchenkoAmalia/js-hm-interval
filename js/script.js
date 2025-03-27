//! 1

// const input = document.getElementById('input');
// const start = document.getElementById('start');

// start.addEventListener('click', onStart);

// let word;
// let count = 0;
// let interval;

// function onStart(params) {
//     word = input.value;
//     if (!word) return;
//     interval = setInterval(() => {
//         console.log(word);
//         count++;
//         if(count === 5){
//             clearInterval(interval);
//         }
//     }, 1000);
// }

// function onStop(params) {
//     clearInterval(interval);
// }

//! 2

// const text = document.getElementById('text');
// const square = document.getElementById('square');
// const button = document.getElementById('btn');

// function changes(params) {
//     let sec = 0;
//     interval = setInterval(() => {
//         sec++;
//         if( sec === 5){
//             text.style.color = 'blue';
//             console.log('текст став блакитним ')
//         }
//         if(sec === 8){
//             square.style.backgroundColor = 'pink';
//             console.log('квадрат став рожевим ')
//         }
//         if(sec === 15){
//             button.style.width = '100px';
//             button.style.height = '150px';
//             console.log('кнопка стала більше ')
//         }
//     }, 1000);
// }

// changes()

//! 3

// let score = 0;
// let isGameActive = false;
// let time = 10;
// const scoreBoard = document.getElementById('scoreBoard');
// const square = document.getElementById('square');
// const start = document.getElementById('start');

// square.style.display = 'none';
// start.addEventListener('click', startGame);

// function startGame() {
//     score = 0;
//     isGameActive = true;
//     time = 10;
//     scoreBoard.textContent = `Очки: ${score}`;

//     square.style.display = 'block';

//     const interval = setInterval(() => {
//         time--;
//         if (time <= 0) {
//             clearInterval(interval);
//             endGame();
//         }
//     }, 1000);
// }

// function endGame() {
//     isGameActive = false;
//     square.style.display = 'none';
//     alert(`Гра закінчена! Ваші очки: ${score}`);
// }

// square.addEventListener('click', () => {
//     if (isGameActive) {
//         score++;
//         scoreBoard.textContent = `Очки: ${score}`;
//     }

//! 4

const text = document.getElementById("text");
const input = document.getElementById("input");
const start = document.getElementById("start");

start.addEventListener("click", startTime);

function startTime() {
  const time = input.value;
  const timeInMs = time * 1000;

  setTimeout(() => {
    console.log("привіт!");
  }, timeInMs);
}
