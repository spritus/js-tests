const ps = require("prompt-sync");
const prompt = ps();
let age = prompt("How old are you? ");
console.log(`You are ${age} years old.`);