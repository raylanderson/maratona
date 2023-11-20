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
/*
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


//declaração apenas
function calcularSoma(numero1, numero2) {
    let total = numero1 + numero2;
    console.log(total);
}

// chamada da fução -> momento em que ela vai ser executada
calcularSoma(7, 10);
*/

/**
 * DOM
 * Document Object Model (modelo do objeto do documento)
 * 
 */
/*
const cabecalho = document.querySelector('header');

console.log(cabacalho);
*/

/**
 * 
 * eventos
 * 
 * 
 * addEventListener
 * 
 * elemento.addEventListener('evento', função);
 * 
 */
/*
const tweetar = document.querySelector('button')

function imprimirNoConsole() {
    console.log('Clicou no botão!')
}

tweetar.addEventListener('click', imprimirNoConsole);
*/
/***
 * 
 * 1º Passo: capturar o valor da textarea para criar o tweet
 * 2º Passo: construir o tweet
 * 3º Passo: Imprimir esse tweet
 * 
 */

const textarea = document.querySelector('textarea');
const tweetar = document.querySelector('button');

function pegarTweet(event) {
    event.preventDefault(); 

    const tweetTextarea = textarea.value;
    criarTweet(tweetTextarea)
}

tweetar.addEventListener('click', pegarTweet);

function criarTweet(tweetTexto) {
    console.log(tweetTexto)

    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    //OBJETO
    const tweet = {
        nome: "Raylanderson",
        foto: "./src/img/profilePic.png",
        usuario: "@raylandersonKenzie",
        texto: tweetTexto,
        tempo: `${hora}:${minutos}`
    }

    listarTweet(tweet);

}

function listarTweet(tweet) {
    console.log(tweet)
}


// CRIAR O TWEET
// TEXTO DO TWEET
// NOME
// FOTO
// NOME USUARIO
// HORÁRIO
