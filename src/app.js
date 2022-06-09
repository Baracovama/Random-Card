/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/*window.onload = function() {
  let numero = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"];
  let palo = ["♦", "♥", "♠", "♣"];

  const random = value => {
    let index = Math.floor(Math.random() * value.length);
    return value[index];
  };

  console.log(random(numero));
  console.log(random(palo));
};
*/
window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomNumber();
};

let generateRandomNumber = () => {
  let numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "K",
    "Q",
    "A"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["diamonds", "hearts", "spades", "clubs"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
