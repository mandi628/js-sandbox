/* import Math */

/* Originally from _Python by Example_ by Nichola Lacey, borrowed from local library in July 2024. */

/* print("Challenge 011")
# Task the user to enter a number over 100 and then enter a number under 10 and tell them how many times the smaller number goes into the larger number in a user-friendly format. */

function ch11() {
  const over100 = prompt('Please enter a number greater than 100.');
  const under10 = prompt('Please enter a number less than 10.');
  const divisi = +over100 / +under10;
  alert(`${over100} divided by ${under10} is ${Math.round(divisi)}.`);
}

/* print("Challenge 012")
# Ask for two numbers. If the first one is larger than the second, display the second number first and then the first number. Otherwise show the first number first and then the second. */

function ch12() {
  const firstNum = prompt('Please enter a number.');
  const secondNum = prompt('Please enter another number.');
  if (+firstNum >= +secondNum) {
    alert(`${secondNum}, ${firstNum}`);
  } else {
    alert(`${firstNum}, ${secondNum}`);
  }
}
