/* #! /usr/bin/env python3

# Python by Example, by Nichola Lacey
# borrowed from library 2024.07.05

# Chapter 1: The Basics

print("Challenge 001")
# Ask for the user's first name and display the output message 'Hello [First Name]'
first_name = input("What is your first name? ") */

function ch01() {
  const firstName = prompt('What is your first name?');
  alert(`Hello, ${firstName}!`);
}

/* print("Challenge 002")
# Ask for the user's first name and then ask for their surname and display the output message */

function ch02() {
  const firstName = prompt('What is your first name?');
  const lastName = prompt('What is your surname?');
  alert(`Hello, ${firstName} ${lastName}! Have a great day!`);
}

/* print("Challenge 003")
# Write code that will display the joke 'What do you call a bear with no teeth?' and on the next line display the answer 'A gummy bear!' Try to create it using only one line of code. */

function ch03() {
  alert("What do you call a bear with no teeth?");
  alert("A gummy bear!!!");
}

/* print("Challenge 004")
# Ask the user to enter two numbers. Add them together and display the answer as 'The total is [answer]'. */

function ch04() {
  const a = prompt("Enter a number:");
  const b = prompt("Enter another number:");
  const answer = (+a + +b);
  alert(`The total is ${answer}.`);
}

/* print("Challenge 005")
# Ask the user to enter three numbers. Add together the first two numbers and then multiply this total by the third. Display the answer as 'The answer is [answer]' */

function ch05() {
  const x = prompt('Enter a number:');
  const y = prompt('Enter another number:');
  const z = prompt('One more number...');
  const answer = ((+x + +y) * +z);
  alert(`The answer is ${answer}!`);
}

/* print("Challenge 006")
# Ask how many slices of pizza the user started with and ask how many slices they have eaten.
# Work out how many slices they have left and display the answer in a user-friendly format. */

function ch06() {
  const pizzaStart = prompt('How many slices of pizza did you start with?');
  const pizzaEaten = prompt('How many slices of pizza have been eaten?');
  const pizzaLeft = +pizzaStart - +pizzaEaten;
  alert(`You have ${pizzaLeft} slices of pizza left.`);
}

/* print("Challenge 007")
# Ask the user for the name and their age. Add 1 to their age and display the output:
# [Name] next birthday you will be [new age]. */

function ch07() {
  const name = prompt('What is your name?');
  const age = prompt('How old are you?');
  const newAge = +age + 1;
  alert(`${name}, on your next birthday, you will be ${newAge}.`);
}

/* print("Challenge 008")
# Ask for the total price of the bill, then ask how many diners there are.
# Divide the total bill by the number of diners and show how much each person must pay. */

function ch08() {
  const price = prompt('What is the total prices of the bill?');
  const diners = prompt('How many diners are there?');
  const split = +price / +diners;
  const splitRounded = split.toFixed(2);
  alert(`Each person must pay $ ${splitRounded}.`);
}

/* print("Challenge 009")
# Write a program that will ask for a number of days and then will show how many hours, minutes and seconds are in that number of days. */

function ch09() {
  const days = prompt('How many days do you want to calculate?');
  const hours = +days * 24;
  const minutes = hours * 60;
  const seconds = minutes * 60;
  alert(`${days} days is made up of\n    ${hours} hours\n    ${minutes} minutes, and\n    ${seconds} seconds.`);
}

/* print("Challenge 010")
# There are 2.204 pounds in a kilogram. Ask the user to enter a weight in kilograms and convert it to pounds. */

function ch10() {
  const kg = prompt('Please enter a kilogram weight you would like converted to pounds.');
  const lb = +kg * 2.204;
  alert(`${kg} kilograms is ${lb.toFixed(1)} pounds.`);
}
