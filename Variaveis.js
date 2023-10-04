//Crie uma variável cor 🎨
//Crie uma variável chamada cor, que pode ter seu valor alterado e atribua à ela o nome da cor 'verde'.
//Lembre-se de colocar a cor entre aspas simples ('').
cor = "verde";

//Atribua e reatribua valores ↔️
//Crie uma variável chamada cidade e atribua à ela o nome 'Parauapebas'.
//Depois, mude o nome da cidade armazenada na variável cidade para 'Rio de Janeiro'. Lembre-se de colocar o nome da cidade entre aspas simples ('').
let cidade = "Parauapebas";
cidade = "Rio de Janeiro";

console.log(cidade); // Isso irá imprimir 'Rio de Janeiro'

//Crie uma constante para armazenar o seu nome 🏷
//Crie uma constante chamada meuNome e atribua à ela o seu nome entre aspas simples ('').
const meuNome = "Seu Nome"; // Substitua 'Seu Nome' pelo seu nome real entre as aspas simples

//Crie uma variável para guardar a sua idade 🎈
//Crie uma variável chamada minhaIdade e atribua à ela o número que representa a sua idade.
let minhaIdade = 29; // Substitua 29 pela sua idade real

//Corrija o código 💻
//O seguinte código retorna um erro:

/*const email = email@trybe.com;
        email = outroEmail@trybe.com;*/

function corrigeCodigo() {
  try {
    /***** Não altere os códigos acima *****/
    /***** Escreva o seu código aqui *****/

    let email = "email@trybe.com";
    email = "outroEmail@trybe.com";

    /***** Fim do seu código *****/
    /***** Não altere os códigos abaixo *****/
  } catch (e) {
    return "incorrect";
  }
  return "correct";
}

/*  Crie variáveis de diferentes tipos 🧑‍💻
Declare uma variável com o nome:

tipoTexto e atribua a ela um valor do tipo string;

tipoNumero e atribua a ela um valor do tipo number;

verdadeiro e atribua a ela um valor do tipo boolean correspondente ao nome;

falso e atribua a ela um valor do tipo boolean correspondente ao nome;

tipoNulo com o valor null;

tipoIndefinido e sem valor. */

// Variável do tipo string
let tipoTexto = "Isso é uma string";

// Variável do tipo number
let tipoNumero = 42;

// Variável do tipo boolean (verdadeiro)
let verdadeiro = true;

// Variável do tipo boolean (falso)
let falso = false;

// Variável do tipo null
let tipoNulo = null;

// Variável do tipo undefined (não atribuída a nenhum valor)
let tipoIndefinido;

//Corrija os valores ✅
//No código abaixo, os valores das variáveis estão trocados. Faça com que cada variável possua seu valor correto sem atribuir nenhum valor novo além dos que já estão no código.

/* Copiar
    let nome = true;
    let idade = 'Harry Potter';
    let souUmBruxo = 210; */

let souUmBruxo = true; // A variável souUmBruxo é do tipo boolean, indicando se a pessoa é ou não um bruxo.
let nome = "Harry Potter"; // A variável nome é uma string que armazena o nome do personagem.
let idade = 210; // A variável idade é um número que representa a idade do personagem (aproximadamente).

let escola = "Trybe";

//Qual exemplo abaixo apresenta uma boa estrutura de declaração de variavel?
const idade = 34;

//A forma adequada de atribui;áo de um novo valor a variavel abaixo, quem já esta declarada, é encontrada em:
/*let escola = 'Trybe';*/
let escola = "que te ensina a programar, a aprender e a trabalhar";

//considera o codigo abaixo, qual o tipo primitivo usando typeof:
/*var variavel = 'O rato roeu a roupa do rei de Roma';
 
const segundaVariavel = 2;

var terceiraVariavel = false;

var quartaVariavel = '10';

let quintaVariavel = true;

console.log(typeof variavel);
console.log(typeof segundaVariavel);
console.log(typeof tereceiraVariavel);
console.log(typeof quartaVariavel);
console.log(typeof quintaVariavel);*/

var variavel = "O rato roeu a roupa do rei de Roma";
const segundaVariavel = 2;
var terceiraVariavel = false;
var quartaVariavel = "10";
let quintaVariavel = true;

console.log(typeof variavel); // string
console.log(typeof segundaVariavel); // number
console.log(typeof terceiraVariavel); // boolean
console.log(typeof quartaVariavel); // string
console.log(typeof quintaVariavel); // boolean

//I - undefined é o tipo primitivo para uma variável sem valor atribuído.
//III - null é o tipo primitivo para uma variável que aponta para um valor ausente.
//V - Tanto o undefined quanto o null precisam da variável declarada.

//Com base na definição, tipos primitivos são:
//R: os tipos de valores possíveis de serem utilizados em seu programa.

/* O objetivo deste exercício é realizar a soma entre 178 e 93. Para isso: