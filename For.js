/*Utilize uma estrutura de repetição para exibir cada item de um array.

Observe a estrutura abaixo:

Copiar
const numeros = [1, 2, 3, 4, 5];
A constante numeros é um array de números. Sendo assim:

Crie um algoritmo que utiliza estrutura de repetição;
Exiba no console cada item de dentro do array.*/
const numeros = [1, 2, 3, 4, 5];
/***** Escreva seu código nas linhas abaixo *****/
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

/*const valoresProdutos = [10, 12, 8];
let somaTotal = 0;

for (let i = 0; i < valoresProdutos.length; i++) {
  somaTotal += valoresProdutos[i];
}

console.log("O valor total da compra é: R$" + somaTotal);
*/
const valoresProdutos = [10, 12, 8];
let somaTotal = 0;
/***** Escreva seu código nas linhas abaixo *****/
for (let i = 0; i < valoresProdutos.length; i++) {
  somaTotal += valoresProdutos[i];
}

console.log("O valor total da compra é: R$" + somaTotal);

/*Mario decidiu fazer uma salada de frutas e precisa comprar banana, maçã, mamão e goiaba. 
Ele criou uma lista com JavaScript para guardar esses valores:

Copiar
const listaDeFrutas = ['banana', 'maçã', 'mamão', 'goiaba'];
Mario esqueceu de adicionar ‘manga’ em sua lista e precisa da sua ajuda para resolver esse problema:

Utilize o método push para adicionar o valor 'manga' ao final do array listaDeFrutas;

Use a estrutura de repetição for na constante listaDeFrutas atualizada para exibir todas as frutas da lista.
*/
const listaDeFrutas = ["banana", "maçã", "mamão", "goiaba"];

// Adiciona 'manga' ao final do array
listaDeFrutas.push("manga");

// Utiliza um loop for para exibir todas as frutas da lista
for (let i = 0; i < listaDeFrutas.length; i++) {
  console.log(listaDeFrutas[i]);
}

/*João precisa ajudar sua filha Maria a estudar a tabuada do 3 e do 7, e teve a ideia de usar a tecnologia ao seu favor, 
contudo precisa da sua ajuda:

Desenvolva um algoritmo que multiplique os números de 1 a 9 pelos números 3 e 7. 
Você terá como multiplicando os números 3 e 7 e como multiplicadores os números de 1 a 9.

Exiba todas as operações com seus respectivos resultados no console do seu navegador.
De olho na dica 👀 : Para exibir as operações no console do seu navegador, 
você pode utilizar duas estruturas de repetição for aninhadas, 
que vão percorrer item a item. Para começar, você pode usar a constante multiplicador dada a seguir:

Copiar
const multiplicador = [3, 7];
O console deve ter um retorno como esse:*/
/*3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63*/
/*Quando for desenvolver o segundo for utilize os números de 1 a 9. 😉*/
const multiplicador = [3, 7];

// Loop para iterar através dos multiplicadores (3 e 7)
for (let i = 0; i < multiplicador.length; i++) {
  const numeroMultiplicador = multiplicador[i];

  // Loop para iterar através dos números de 1 a 9
  for (let j = 1; j <= 9; j++) {
    const resultado = numeroMultiplicador * j;
    console.log(`${numeroMultiplicador} x ${j} = ${resultado}`);
  }
}

/*Crie uma função que exiba a frase: Vamo que vamo! 🚀
Crie uma função mostrarFrase que retorne a frase ‘Vamo que vamo!’ quando chamada.*/
function mostrarFrase() {
  return "Vamo que vamo! 🚀";
}

// Para exibir a frase, você pode chamar a função assim:
console.log(mostrarFrase());

/* Crie uma função saudacao que recebe um parâmetro nome e mostre uma mensagem de saudação, por exemplo: 'Olá, Julia!'.
 */
function saudacao(nome) {
  const saudacao = "Olá, " + nome + "!";
  return saudacao;
}

console.log(saudacao("Julia"));

/*Crie uma função clientePedido que receba um parâmetro numeroPedido. Considere as condições a seguir:

Se numeroPedido for igual a 1, retorne a mensagem 'Pizza de Calabresa';
Se numeroPedido for igual a 2, retorne a mensagem 'Pizza de Quatro Queijos';
Se numeroPedido for igual a 3, retorne a mensagem 'Pizza de Frango com Catupiry';
Se numeroPedido for igual a 4, retorne a mensagem 'Pizza de Brigadeiro';
Se numeroPedido não entrar nas condições acima, retorne a mensagem 'Número do pedido inválido!'.*/
function clientePedido(numeroPedido) {
  if (numeroPedido === 1) {
    return "Pizza de Calabresa";
  } else if (numeroPedido === 2) {
    return "Pizza de Quatro Queijos";
  } else if (numeroPedido === 3) {
    return "Pizza de Frango com Catupiry";
  } else if (numeroPedido === 4) {
    return "Pizza de Brigadeiro";
  } else {
    return "Número do pedido inválido!";
  }
}

// Exemplos de uso:
console.log(clientePedido(1)); // Deve retornar 'Pizza de Calabresa'
console.log(clientePedido(3)); // Deve retornar 'Pizza de Frango com Catupiry'
console.log(clientePedido(5)); // Deve retornar 'Número do pedido inválido!'

/*Fazendo média 🔢
Crie uma função chamada mediaDosNumeros que recebe como parâmetro um array de números chamado arrayNumeros e retorna a média desses números.

De olho na dica 👀 : Use uma estrutura de repetição for para percorrer o array.*/

function mediaDosNumeros(arrayNumeros) {
  if (arrayNumeros.length === 0) {
    return 0; // Retorna 0 se o array estiver vazio para evitar divisão por zero.
  }

  let soma = 0;

  for (let i = 0; i < arrayNumeros.length; i++) {
    soma += arrayNumeros[i];
  }

  const media = soma / arrayNumeros.length;
  return media;
}

// Exemplo de uso:
const numeros = [10, 20, 30, 40, 50];
console.log(mediaDosNumeros(numeros)); // Deve retornar 30
