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
const feed = document.querySelector(".conteudoPrincipal__listaTweets")

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
        foto: "./assets/img/profilePic.png",
        usuario: "@raylandersonKenzie",
        texto: tweetTexto,
        tempo: `${hora}:${minutos}`
    }

    listarTemplateTweet(tweet);

}

function listarTemplateTweet(tweet) {

    const {nome, foto, usuario, texto, tempo} = tweet

    //CRIANDO ELEMENTOS PÁRA LISTAR O TEMPLATE
    let li   = document.createElement("li");
    let img  = document.createElement("img");
    img.src = foto
    let div  = document.createElement("div");
    let h2   = document.createElement("h2");
    h2.innerText = nome
    let span = document.createElement("span");
    span.innerText = `${usuario} - ${tempo}`

    let p    = document.createElement("p");
    p.innerText = texto

    //ADICIONANDO ELEMENTOS DENTRO DA DIV
    let li = document.createElement("li")
    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)

    //ADICIONANDO ELEMENTOS DENTRO DA LI
    li.appendChild(img)
    li.appendChild(div)

    feed.appendChild(li)
}


// CRIAR O TWEET
// TEXTO DO TWEET
// NOME
// FOTO
// NOME USUARIO
// HORÁRIO
