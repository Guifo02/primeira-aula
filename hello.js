const prompt = require('prompt-read')

// main

console.clear()

var nome = prompt('Digite seu nome: ')
var idade = prompt('Digite sua idade: ', "number")

console.log(nome, idade)
