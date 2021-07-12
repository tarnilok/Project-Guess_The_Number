window.onload = () => document.getElementById("reply").setAttribute("id", ""); // we prevent to run "#reply" in css
const number = Math.round(Math.random() * 100); // calculating randomly a number between 0 and 100
// console.log(number);
let counter = 0; // we count every attempts
const clicked = document.getElementById("enter");

clicked.addEventListener("click", () => {
  document.querySelector(".reply").setAttribute("id", "reply"); // we allow to run "#reply" in css
  const answer = document.getElementById("input").value; // we take the value entered by user with "click"

  if (isNaN(answer)) {
    document.getElementById("reply").innerHTML = `Please enter a number!`;
  } else if (answer.trim() == "") {
    document.getElementById("reply").innerHTML = `Please enter a number!`;
  } else if (answer > 100 || answer < 0) {
    document.getElementById("reply").innerHTML = `The number must be between 0 and 100`;
  } else if (answer > number) {
    counter++;
    document.getElementById("reply").innerHTML = `It is incorrect! Please decrease the value you entered`;
  } else if (answer < number) {
    counter++;
    document.getElementById("reply").innerHTML = `It is incorrect! Please increase the value you entered`;
  } else {
    counter++;
    if (counter <= 3) {
      document.getElementById("reply").innerHTML = `Congrats! You must be a genius😎 Your MARK ⇨ A`;
    } else if (counter <= 6) {
      document.getElementById("reply").innerHTML = `Very Good! You are one of the bests🔥 Your MARK ⇨ B`;
    } else if (counter <= 8) {
        document.getElementById("reply").innerHTML = `Good! You have some skills😉 Your MARK ⇨ C`;
    } else if (counter <= 10) {
      document.getElementById("reply").innerHTML = `At last! I thought you would never find🙄 Your MARK ⇨ D`;
    } else {
      document.getElementById("reply").innerHTML = `Sorry, but you are a disaster😱 Your MARK ⇨ F`;
    }
  }
  document.querySelector("span").innerHTML = `${counter}`; // we show every attempt on screen
  document.getElementById("input").value = ""; // after every attempt, inside of the input element will be cleared
});
