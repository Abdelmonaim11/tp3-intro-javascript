var tmpF = 0;
var tmpC = (5 / 9) * (tmpF - 32);
console.log("Une temperateur en Fahrenheit " + tmpF);
console.log(
  "Cette temperateur equivant a " + tmpC.toFixed(1) + " degres Celsius "
);
tmpF = 60;
tmpC = (5 / 9) * (tmpF - 32);
console.log("Une temperateur en Fahrenheit " + tmpF);
console.log(
  "Cette temperateur equivant a " + tmpC.toFixed(1) + " degres Celsius "
);
console.log("-------------------Exercise 2-------------------");
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
console.log("-------------------Exercise 3-------------------");
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
console.log("-------------------Exercise 4-------------------");
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
console.log("-------------------Exercise 4-pryramide-------------------");
function pyramid(size) {
  for (let i = 1; i <= size; i++) {
    let spaces = " ".repeat(size - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars + spaces);
  }
}

console.log("Un motif de taille= " + size);
pyramid(size);
console.log("-------------------Exercise 5-------------------");
var n = prompt("Entrez un nombre positive: ");
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    console.log(n + " n'est pas un nombre premier, il divise " + i);
  }
}
console.log("-------------------Exercise 6-------------------");
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
function fibo2(limit) {
  let a = 0,
    b = 1,
    index = 1;

  while (b <= limit) {
    [a, b] = [b, a + b];
    index++;
  }

  return { valeur: b, rang: index };
}
var limite = prompt("Entrez une valeur limite: ");
var resultat = fibo2(Number(limite));
console.log(
  "Premier terme de Fibonacci supérieur à " +
    limite +
    " est F(" +
    resultat.rang +
    ") = " +
    resultat.valeur
);
console.log("-------------------Exercise 7-------------------");
function Raca1(A) {
  let u = A / 2;
  while (Math.abs(u * u - A) >= 1e-5) {
    u = (u + A / u) / 2;
  }
  return u;
}

var A = parseFloat(prompt("Pour un nombre A entre 1 et 100: "));
if (A >= 1 && A <= 100) {
  console.log("Valeur approchée de la racine carrée = " + Raca1(A));
} else {
  console.log("Veuillez entrer un nombre entre 1 et 100.");
}
