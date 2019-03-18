console.log("I'm ready!");

let hacker1 = 'Tasos';
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Hamza';
console.log(`The navigator' name is ${hacker2}`)

if (hacker1.length > hacker2.length) {
  console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
}
  else if (hacker1.length < hacker2.length) {
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`)  
  }
  else {
    console.log(`wow, you both got equally long names, ${hacker2.length} characters!!`)
  }

console.log(hacker1.toUpperCase().split(``).join(' '));
console.log(hacker2.split('').reverse('').join(''))

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first`)
} 
  else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first definitely`)
  } 
  else {
  console.log(`What?! You both got the same name?`)
  }
