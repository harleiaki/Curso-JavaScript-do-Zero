/*Lista de compras 🧾
Imagine que você está saindo para fazer compras no supermercado com a seguinte lista:
Maçã
Biscoito/Bolacha
Banana
Café em pó
Leite
Arroz
Crie uma variável chamada listaDeCompras e atribua um array com as informações da lista acima.
*/
let listaDeCompras = [
  "Maçã",
  "Biscoito/Bolacha",
  "Banana",
  "Café em pó",
  "Leite",
  "Arroz",
];

/*Elabore um algoritmo usando o código abaixo:

const frutas = ['Abacaxi', 'Uva', 'Banana', 'Pera', 'Maçã'];
Utilize o console.log() para mostrar as seguintes informações no console:

Mostre o terceiro item do array;
Mostre o primeiro item do array;
Mostre o quinto item do array;
Mostre a concatenação do primeiro item com o terceiro item do array. O retorno deve seguir a estrutura 'item1 e item3', 
onde item1 e item3 são seus respectivos valores.*/
const frutas = ["Abacaxi", "Uva", "Banana", "Pera", "Maçã"];
/***** Escreva seu código nas linhas abaixo *****/

console.log(frutas[0]);
console.log(frutas[2]);
console.log(frutas[4]);
console.log(`${frutas[0]} e ${frutas[2]}`);

/*Cleyton decidiu promover uma festa no final de semana, e até já possui uma lista de convidados definida:

const convidados = ['Adilson', 'Claudio', 'Juliana', 'Vinícius'];
Na sexta-feira a noite, ele lembrou de convidar mais três amigos: Laura, Guilherme e Leticia. Além disso, 
Juliana entrou em contato e cancelou sua presença.

Crie um algoritmo que ajude Cleyton a manipular o array convidados para:

Substituir o nome 'Juliana' por 'Laura';
Adicionar 'Guilherme' e 'Leticia' no array.*/
const convidados = ["Adilson", "Claudio", "Juliana", "Vinícius"];

// Substituir 'Juliana' por 'Laura'
const indiceJuliana = convidados.indexOf("Juliana");
if (indiceJuliana !== -1) {
  convidados[indiceJuliana] = "Laura";
}

// Adicionar 'Guilherme' e 'Leticia' no array
convidados.push("Guilherme", "Leticia");

// Verificar o array após as manipulações
console.log(convidados);

/*Chegou o verão e a clientela de uma sorveteria cresceu. João, dono do estabelecimento, precisa de ajuda no controle do seu estoque. 
Ajude o João a descobrir:

A quantidade de sabores de sorvete;
A quantidade de cobertura disponível.
Considere as listas a seguir:

Lista de sabores de sorvete:

Chocolate
Morango
Açaí
Creme
Flocos
Lista de sabores de cobertura:

Chocolate
Morango
Doce de leite
Todos os sabores de sorvete devem estar em um array na variável sabores;
Todos os sabores de cobertura devem estar em um array na variável coberturas;
Mostre no console duas mensagem informando as quantidades de sabores de cada lista, por exemplo:
‘Quantidade de sabores de sorvete: 5’;
‘Quantidade de sabores de cobertura: 3’.*/

const sabores = ["Chocolate", "Morango", "Açaí", "Creme", "Flocos"];
const coberturas = ["Chocolate", "Morango", "Doce de leite"];

const quantidadeSaboresSorvete = sabores.length;
const quantidadeCoberturas = coberturas.length;

console.log(`Quantidade de sabores de sorvete: ${quantidadeSaboresSorvete}`);
console.log(`Quantidade de sabores de cobertura: ${quantidadeCoberturas}`);

/*Você criou uma lista com os jogos de que você mais gosta para postar no seu blog, ordenando da seguinte forma:

1 - Quebra-Cabeça
2 - Tetris
3 - Sudoku
4 - Xadrez
5 - Batalha Naval
Ao finalizar a lista, você decidiu ordená-la do jogo em que você menos se diverte para o que mais se diverte.

Para isso, crie um algoritmo capaz de inverter a ordem da sua lista:

5 - Batalha Naval
4 - Xadrez
3 - Sudoku
2 - Tetris
1 - Quebra-Cabeça
Note que, ao invés de exibir os números em ordem crescente - 1, 2, 3, 4, 5, sua lista ficará na ordem invertida - 5, 4, 3, 2, 1.

Para a resolução desse exercício, considere os seguintes pontos:

Utilize as seguintes variáveis no código:
Copiar
let lista = [1, 2, 3, 4, 5];
let inverter = true;
let listaInvertida = [];
Crie uma condicional if/else:
Se o valor da variável inverter for true, uma nova lista invertida deve ser salva na constante listaInvertida. Em seguida, 
mostre o array de listaInvertida no console;

Se inverter não for true, então nada será atribuído na constante listaInvertida e o array de lista será mostrado no console.*/

let lista = [1, 2, 3, 4, 5];
let inverter = true;
let listaInvertida = [];

function inverteArray() {
  /***** Escreva seu código nas linhas abaixo *****/
  if (inverter) {
    listaInvertida[0] = lista[4];
    listaInvertida[1] = lista[3];
    listaInvertida[2] = lista[2];
    listaInvertida[3] = lista[1];
    listaInvertida[4] = lista[0];

    console.log(listaInvertida); // [5, 4, 3, 2, 1]
  } else {
    console.log(lista); // [1, 2, 3, 4, 5]
  }
}
