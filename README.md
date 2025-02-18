# TP3  — Introduction to JavaScript — Simple Types, Variables, and Basic Statements
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">Overview</a>
      <ul>
        <li><a href="#built-with">Technologies Used</a></li>
      </ul>
    </li>
    <li>
      <a href="#about-the-project">About The TP</a>
      <ul>
        <li><a href="#built-with">Exercise 1 </a></li>
        <li><a href="#built-with">Exercise 2 </a></li>
        <li><a href="#built-with">Exercise 2-bis </a></li>
        <li><a href="#built-with">Exercise 3 </a></li>
        <li><a href="#built-with">Exercise 4 </a></li>
        <li><a href="#built-with">Exercise 4-bis </a></li>
        <li><a href="#built-with">Exercise 5 </a></li>
        <li><a href="#built-with">Exercise 6 </a></li>
        <li><a href="#built-with">Exercise 7 </a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Implementation</a>
      <ul>
        <li><a href="#prerequisites">Screenshots</a></li>
      </ul>
    </li>
  </ol>
</details>


## Overview
The purpose of this TD is to give you a basic JavaScript language (simple types, variable declarations, control instructions, iterations) which are syntactically very close to those used by the C language.

### Technologies Used
 - <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="30" height="30"/>   **JavaScript**
 - <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" width="30" height="30"/>   **Visual Studio Code**
 - <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" width="30" height="30"/> &nbsp;&nbsp;**Git**
 - <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="30" height="30"/> &nbsp;&nbsp;**GitHub**
## About The Project
### Exercise 1:
The objective of this exercise is to write a JavaScript function, degreC, that converts a given temperature from Fahrenheit to Celsius using the formula:

                                                                tempC=5/9(tempF−32)
The function should:
- Take a temperature value in Fahrenheit as input.
- Compute the equivalent temperature in Celsius.
- Display the result in a clear and readable format.
This exercise helps reinforce fundamental JavaScript concepts such as function creation, arithmetic operations, user input handling, and console output.
```javascript
var tmpF = 0;
var tmpC = (5 / 9) * (tmpF - 32);
console.log("Une temperateur en Fahrenheit " + tmpF);
console.log("Cette temperateur equivant a " + tmpC.toFixed(1) + " degres Celsius ");
tmpF = 60;
tmpC = (5 / 9) * (tmpF - 32);
console.log("Une temperateur en Fahrenheit " + tmpF);
console.log("Cette temperateur equivant a " + tmpC.toFixed(1) + " degres Celsius "); 
```
### Exercise 2:
The objective of this exercise is to write a JavaScript function, hjms, that converts a given duration in seconds into its equivalent in days, hours, minutes, and seconds.

The function should:
- Take a number of seconds as input.
- Compute the corresponding number of days, hours, minutes, and remaining seconds.
- Display the result in a clear and structured format.
This exercise helps reinforce essential JavaScript concepts such as function creation, arithmetic operations (division and modulus), and formatting output for readability
```javascript
var duree = 235789;
console.log("La duree en secondes est " + duree);
function hjms(duree) {
  var heures = Math.floor(duree / 3600);
  var jours = Math.floor(heures / 24);
  heures = heures % 24;
  var minutes = Math.floor((duree % 3600) / 60);
  var secondes = duree % 60;
  return {
    jours: jours,
    heures: heures,
    minutes: minutes,
    secondes: secondes,
  };
}

var result = hjms(duree);
console.log(
  "Cette duree equivant a " +
    result.jours +
    " jours " +
    result.heures +
    " heures " +
    result.minutes +
    " minutes " +
    result.secondes +
    " secondes "
);
console.log("-------------------Exercise 2 ameliorer-------------------");
date = 3621;
function formatDuration(date) {
  let parts = [];
  var heures = Math.floor(date / 3600);
  var jours = Math.floor(heures / 24);
  heures = heures % 24;
  var minutes = Math.floor((date % 3600) / 60);
  secondes = date % 60;
  if (jours > 0) parts.push(jours + " jour" + (jours > 1 ? "s" : ""));
  if (heures > 0) parts.push(heures + " heure" + (heures > 1 ? "s" : ""));
  if (minutes > 0) parts.push(minutes + " minute" + (minutes > 1 ? "s" : ""));
  if (secondes > 0)
    parts.push(secondes + " seconde" + (secondes > 1 ? "s" : ""));
  return parts.join(" ");
}
console.log("Cette duree equivant a " + formatDuration(date));
```
### Exercise 3:
The objective of this exercise is to write a JavaScript program, troisNombres, that sorts three given numbers in ascending order (from smallest to largest).
The program should:
- Take three numerical inputs.
- Compare and arrange them in increasing order.
- Display the sorted numbers in a clear format.
This exercise helps reinforce JavaScript concepts such as conditional statements, comparison operations, and array sorting.
```javascript
var a = 14;
var b = 10;
var c = 17;

if (a > b) {
  var temp = a;
  a = b;
  b = temp;
}

if (a > c) {
  var temp = a;
  a = c;
  c = temp;
}

if (b > c) {
  var temp = b;
  b = c;
  c = temp;
}

console.log("Les nombres en ordre croissant sont: " + a + ", " + b + ", " + c);
```
### Exercise 4
The objective of this exercise is to write a JavaScript program that generates a triangular pattern (staircase) of a given size using two different looping structures.

The program should:
- Take an integer input representing the size of the triangle.
- Print a right-aligned triangular pattern of * characters.
- Implement two versions of the function:
     - triangle1: Uses a while loop.
     - triangle2: Uses a for loop
This exercise helps reinforce JavaScript concepts such as loops (while and for), string manipulation, and structured output formatting.
```javascript
function triangle1(size) {
  let i = 1;
  while (i <= size) {
    console.log("*".repeat(i));
    i++;
  }
}

function triangle2(size) {
  for (let i = 1; i <= size; i++) {
    console.log("*".repeat(i));
  }
}

let size = 7;
console.log("Un motif de taille= " + size);
triangle1(size);
console.log("Un motif de taille= " + size);
triangle2(size);
```
#### Exercise 4-bis
The objective of this exercise is to write a JavaScript program that displays a pyramid pattern based on a given size.
The program should:
- Prompt the user to enter an integer representing the size of the pyramid.
- Display a pyramid made of asterisks (*), with an odd number of asterisks per line to ensure symmetry.
- Use an appropriate loop structure (for, while, or another).
This exercise helps reinforce the understanding of loops, mathematical operations (calculating spaces and the number of stars), and string manipulation in JavaScript.
```javascript
function pyramid(size) {
  for (let i = 1; i <= size; i++) {
    let spaces = " ".repeat(size - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars + spaces);
  }
}

console.log("Un motif de taille= " + size);
pyramid(size);
```
### Exercise 5
The objective of this exercise is to write a JavaScript program called Premier that determines whether a given number is prime or not.

The program should:
- Prompt the user to input a positive integer.
- Check if the number is divisible only by 1 and itself (i.e., it has no other divisors).
- Display the result, indicating whether the number is prime or not. If the number is not prime, it should also indicate the divisor that caused it to be non-prime.
This exercise helps reinforce JavaScript concepts such as loops, conditionals, and modulus operations
```javascript
var n = prompt("Entrez un nombre positive: ");
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    console.log(n + " n'est pas un nombre premier, il divise " + i);
  }
}
```
### Exercise 6
The objective of this exercise is to write two JavaScript programs to calculate terms in the Fibonacci sequence.
The Fibonacci sequence is defined by the recurrence relation:
```
                                        F(0)=0,F(1)=1,F(n)=F(n−1)+F(n−2) for n∈N
```
**Part a:**
Write a program Fibo1 that calculates the nth term of the Fibonacci sequence, where n is provided by the user.

**Part b:**
Write a program Fibo2 that finds the first term in the Fibonacci sequence that is greater than a given value, also provided by the user. The program should return both the value of the term and its position in the sequence.

This exercise reinforces understanding of recursion, loops, and working with sequences in JavaScript.
```javascript
function fibo1(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
var n = prompt("Entrez un entier: ");
console.log("Fibonacci(" + n + ") = " + fibo1(n));
```
### Exercise 7




## Implementation
  ### ScreenShots
  #### Exercise 1
  ![image](https://github.com/user-attachments/assets/cd635ab9-187e-47f9-9d12-dd0976afc965)
 #### Exercise 2
 ![image](https://github.com/user-attachments/assets/225f8d26-d55a-4da3-8aba-f680b74a6538)
 #### Exercise 3
 ![image](https://github.com/user-attachments/assets/f350a88a-cc35-49c4-90c5-0e04ad88d7c4)
 #### Exercise 4
 ![image](https://github.com/user-attachments/assets/d8201c37-19be-450a-8249-2f8e3693af1c)
 ##### Exercise 4-bis
 ![image](https://github.com/user-attachments/assets/9d8dba26-5fe5-4447-aef8-86c07bd3da7d)
 #### Exercise 5
 ![image](https://github.com/user-attachments/assets/e0861619-f52f-4354-b771-47941fa5e327)
 #### Exercise 6
![image](https://github.com/user-attachments/assets/88fe4454-b61e-4538-badd-b8e4dc919644)
#### Exercise 7
![image](https://github.com/user-attachments/assets/d77d6b1c-4dcd-47fa-92ce-50d336281519)



