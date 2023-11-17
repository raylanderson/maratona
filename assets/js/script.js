// VARIÁVEIS
// uma caixinha de memória, onde eu guardo algum valor

// 3 variaveis
// var > global > má prática, não utilize

// let > variaveis com escropo >

// const > constante, não consigo reatribuir valores pra ele

/*let numero = 0;

const nome = "Raylanderson"
console.log(numero)
console.log(nome) */

/*
operadores básicos
soma: +
subtração: -
multiplicação: *
divisão: /
*/

let numero2 = 3;
let numero3 = 5;

let soma = 2 + 2;
let soma2 = numero2 + numero3;

console.log(soma)
console.log(soma2)

/**
 * operadores lógicos
 * 
 * == / ===
 * != / !==
 * > / >=
 * < / <=
 * 
 */

//console.log(numero2 > numero3)
console.log(!(numero2 > numero3))

/**
 * funções
 */
/*
//declaração apenas
function calcularSoma() {
    let total = 23 + 5;
    console.log(total);
}

// chamada da fução -> momento em que ela vai ser executada
calcularSoma();
*/

//declaração apenas
function calcularSoma(numero1, numero2) {
    let total = numero1 + numero2;
    console.log(total);
}

// chamada da fução -> momento em que ela vai ser executada
calcularSoma(7, 10);

/**
 * DOM
 * Document Object Model (modelo do objeto do documento)
 * 
 */

